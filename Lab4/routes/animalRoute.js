/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: animalRoute.js
    File Desc: This file will contain the express routes used in regards to the animal section(majority of the website) of the website. Within this
    file, routers will be created, routed to the controllers using the GET() functions and then exported.
*/
// Create the router.
const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');
// Use Get commands.
router.get('/', animalController.entryFormView);
router.get('/', animalController.animalList);

// Export the router.
module.exports = router;