const router = require('express').Router();
const passport = require('passport');
const isAuth = require('./authMiddleware').isAuth;

const {
	loginFailure,
	loginSuccess,
	getRegister,
	getIndex,
	getLogin,
	getLogout,
	postRegister
} = require('../controllers/userController');

router.get('/', getIndex);

router.get('/login', getLogin);

router.get('/register', getRegister);
router.post('/register', postRegister);

router.get('/logout', getLogout);

// POST LOGIN
// add passport.authenticate() middleware passing 'local'
// allows route if isValid
router.post('/login');

router.get('/login-success', loginSuccess);

router.get('/login-failure', loginFailure);

// CHECKS FOR AUTHORIZED ACCCESS BEFORE ALLOWING SEEING PROTECTED MATERIAL

module.exports = router;
