// Require the necessary modules
const express = require('express');
const expresshb = require('express-handlebars');
const dotenv = require('dotenv');

// Create an instance of the mongoose module.
const mongoose = require('mongoose');

// Connection URL for the database in use.
const uri = 'mongodb://localhost:27017/ICE9Database'; // Replace 'myDatabase' with your actual database name

// Connect to MongoDB using the URL defined above.
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // You can start defining your models and performing operations here
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema that mongoDB uses for the collection.
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    date_of_birth: String,
    email: String,
    gender: String,
    password: String
});

// Define a model that uses the schema.
const User = mongoose.model('User', userSchema);

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
