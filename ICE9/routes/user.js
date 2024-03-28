// 1. Require Express
const express = require('express');

// 2. Import the homeView function from userController
const userController = require('../controllers/userController');

// 3. Create an Express Router object
const router = express.Router();

// 4. Handle the '/' URL with a GET method and point it to the homeView function
router.get('/', userController.homeView);

// 5. Export the router
module.exports = router;