const connection = require('../config/database');
const { generatePassword } = require('../lib/passwordUtils');
const User = connection.models.User;

// INDEX
const getIndex = (req, res, next) => {
	res.render('index');
};

// REGISTER GET
const getRegister = (req, res, next) => {
	res.render('register');
};
// REGISTER POST - LEVERAGES GENERATE PASSWORD TO STORE A HASHED EMAIL

// LOGIN GET
const getLogin = (req, res, next) => {
	res.render('login');
};
// LOGIN POST SUCCESS

// LOGIN POST FAILURE

// LOGOUT GET

module.exports = {
	loginFailure,
	loginSuccess,
	getRegister,
	getIndex,
	getLogin,
	getLogout,
	postRegister
};
