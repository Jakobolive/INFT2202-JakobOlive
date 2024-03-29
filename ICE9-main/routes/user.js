const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.userView);
router.get('/about', usersController.aboutUsView);
router.get('/questions', usersController.questionsView);

module.exports = router;

