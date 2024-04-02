const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/products', usersController.userView);

module.exports = router;

