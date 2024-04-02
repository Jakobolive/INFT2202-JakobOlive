const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.userList);
router.get('/:id', usersController.userShow);

module.exports = router;

