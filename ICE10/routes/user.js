const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.userList);
router.get('/create', usersController.userCreate);
router.post('/store', usersController.userStore);
router.get('/:id/edit', usersController.userEdit);
router.post('/:id/update', usersController.userUpdate);
router.post('/:id/delete', usersController.userDelete);
router.get('/:id', usersController.userShow);

module.exports = router;

