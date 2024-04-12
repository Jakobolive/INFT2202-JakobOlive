/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: app.js
    File Desc: This file will contain the nodemon and express server setup that will be used in the animal database application. This file will 
    also house the base of the GET and POST routes used in the website as well as the database connection This file also includes a handlebars helper
    to check a variable and check the radio buttons in the edit page off accordingly.
*/

// Require the necessary modules
const express = require('express');
const expressHbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Load the environment variables
dotenv.config();

// Create an instance of the express module
const app = express();
const port = process.env.PORT || 3000;
const MONGO = process.env.MONGO || "mongodb+srv://jakolive01:A5mQ80UX8aGg7RBf@cluster0.malsbqy.mongodb.net/Lab4Db?";

// Set the view engine to handlebars
app.engine('.hbs', expressHbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Creating an handlebars instance.
let handlebars = expressHbs.create({});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create the database connection.
mongoose.connect(MONGO);
// Check connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Create the body parser to pass to the routs.
let codeParser = bodyParser.urlencoded({extended: false});

// Create and register a custom handlebars helper to check the edit radio buttons if passed proper data.
handlebars.handlebars.registerHelper('radioHelper', function( value, testValue){
    // Check for matching strings.
    if ( value == testValue ) {
        return "checked";
    } 
    else {
            return "";
    } 
});

// Import and define the routes
const indexRouter = require('./routes/indexRoute');
const animalRouter = require('./routes/animalRoute');

// Use imported routes.
app.use('/animals/', codeParser, animalRouter);
app.use('/', codeParser, indexRouter);