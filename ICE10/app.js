// Require the necessary modules
const express = require('express');
const expresshb = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Load the environment variables
dotenv.config();

// Create an instance of the express module
const app = express();
const port = process.env.PORT || 3000;
const MONGODBCONN = process.env.MONGODBCONN || "mongodb+srv://jakolive01:A5mQ80UX8aGg7RBf@cluster0.malsbqy.mongodb.net/ProductsDb?";

// Set the view engine to handlebars
app.engine('hbs', expresshb.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(MONGODBCONN);
// Check connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
let urlcodeParser = bodyParser.urlencoded({extended: false});
// Import and define the routes
const usersRouter = require('./routes/user');
const productRouter = require('./routes/products');


app.use('/products', urlcodeParser, productRouter);
app.use('/', urlcodeParser, usersRouter);

