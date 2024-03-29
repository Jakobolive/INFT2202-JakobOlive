// Require the necessary modules
const express = require('express');
const expresshb = require('express-handlebars');
const dotenv = require('dotenv');

// Create an instance of the mongoose module.
const mongoose = require('mongoose');

// Connection URL for the database in use.
const uri1 = 'mongodb+srv://jakolive01:A5mQ80UX8aGg7RBf@cluster0.malsbqy.mongodb.net/';

// Connect to MongoDB using the URL defined above.
mongoose.connect(uri1)
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

// Adding a body parser to deal with the form.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

// Handle POST request for form submission
app.post('/submit-form', (req, res) => {
    const message = req.body.yourMessageInput;
    res.redirect(`/questions?message=${encodeURIComponent(message)}`);
});

// Display the submitted message
app.get('/questions', (req, res) => {
    const message = req.query.message;
    // Check if message exists
    const messageContent = message ? `<p class="lead text-center">${message}</p>` : '';
   // Render the questions.hbs with the main layout with the message included
   res.render('questions', {
    messageContent: messageContent
});
});

// Import and define the routes
const usersRouter = require('./routes/user');

app.use('/', usersRouter);
app.use('/about', usersRouter);
app.use('/questions', usersRouter);
