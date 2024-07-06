import express from 'express'
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.mjs';
import taskRoutes from './routes/task.route.mjs';
import userRoutes from './routes/user.route.mjs';
import "./strategies/local-strategy.mjs";
const PORT = process.env.PORT || 3000;
const app = express();

mongoose
	.connect("mongodb+srv://mjmaundev:d3yLSD7Hhb0JrWeX@2doxdb.vvomlkb.mongodb.net/?retryWrites=true&w=majority&appName=2doxdb")
	.then(() => console.log("Connected to Database"))
	.catch((err) => console.log(`Error: ${err}`));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser("helloworld"));

app.use(
	session({
		secret: "janelqndnm",
		saveUninitialized: true,
		resave: false,
		cookie: {
			maxAge: 60000 * 60,
		},
		store: MongoStore.create({
			client: mongoose.connection.getClient(),
		}),
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});