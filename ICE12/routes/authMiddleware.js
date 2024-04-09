// CALLED IN ROUTER.JS TO AUTHENTICATE BEFORE ALLOWING PROCTED MATERIAL BEING VISIBLE
const isAuth = (req, res) => {
	if (req.isAuthenticated()) {
		res.render('authenticated', { loggedin: true });
	} else {
		res.render('unauthenticated', { loggedin: false });
	}
};

module.exports = { isAuth };
