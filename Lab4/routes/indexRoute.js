/*
    Name: Jakob Olive
    Date: 2024-04-07
    Course: INFT 2202
    File: indexRoute
    File Desc: This file will contain the default route to the index page, the user is sent here upon opening port 3000.
*/
// Create the router.
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
// Use Get commands.
router.get('/', indexController.indexView);

// Export the router.
module.exports = router;