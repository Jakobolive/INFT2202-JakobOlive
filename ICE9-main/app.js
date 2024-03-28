// Require the necessary modules
const express = require('express');
const expresshb = require('express-handlebars');
const dotenv = require('dotenv');

// Create an instance of the express module
const app = express();
const port = process.env.PORT || 3000;

// Load the environment variables
dotenv.config();

// Set the view engine to handlebars
app.engine('hbs', expresshb.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Import and define the routes
const usersRouter = require('./routes/user');

app.use('/', usersRouter);
