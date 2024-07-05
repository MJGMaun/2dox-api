import express from 'express'
import mongoose from 'mongoose';
import taskRoutes from './routes/task.route.mjs';
import userRoutes from './routes/user.route.mjs';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', taskRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

mongoose
.connect("mongodb+srv://mjmaundev:d3yLSD7Hhb0JrWeX@2doxdb.vvomlkb.mongodb.net/?retryWrites=true&w=majority&appName=2doxdb")
.then(() => {
	console.log("Connected to Database!");

	app.listen(PORT, () => {
		console.log(`Listening on port`, PORT);
	});
})
.catch((err) => {
    console.error("Connection failed:", err);
});