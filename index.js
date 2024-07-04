const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/task.route.js');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

mongoose
.connect("mongodb+srv://mjmaundev:d3yLSD7Hhb0JrWeX@2doxdb.vvomlkb.mongodb.net/?retryWrites=true&w=majority&appName=2doxdb")
.then(() => {
	console.log("Connected to Database!");

	app.listen(3000, () => {
		console.log('Listening on port 3000...');
	});
})
.catch((err) => {
    console.error("Connection failed:", err);
});