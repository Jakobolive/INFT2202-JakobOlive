/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: app.js
    File Desc: This file will contain the nodemon and express server setup that will be used in the animal database application. This file will 
    also house the base of the GET and POST routes used in the website as well as the database connection.
*/

// Require the necessary modules
const express = require('express');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Load the environment variables
dotenv.config();

// Create an instance of the express module
const app = express();
const port = process.env.PORT || 3000;
const MONGO = process.env.MONGO || "mongodb+srv://jakolive01:A5mQ80UX8aGg7RBf@cluster0.malsbqy.mongodb.net/Lab4Db?";

// Set the view engine to handlebars
app.engine('hbs', handlebars.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(MONGO);
// Check connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import and define the routes
const indexRouter = require('./routes/indexRoute');
const animalRouter = require('./routes/animalRoute');

// Use imported routes.
app.use('/animals/entry-form', animalRouter);
app.use('/animals/all-animals', animalRouter);
app.use('/', indexRouter);
