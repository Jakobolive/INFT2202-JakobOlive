const express = require('express');
const router = express.Router();

// Define the homeView method
module.exports.homeView = function(req, res) {
    // Render the home template (assuming it's stored in the views directory)
    res.render('home'); // This will render home.hbs
};
