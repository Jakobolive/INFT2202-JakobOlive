const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
var passport = require('passport');
const path = require('path');

// PROCESS.ENV FILE ACCESSIBLE
require('dotenv').config();
// DB CONNECTION FROM DATABASE.JS
const connection = require('./config/database');

// MONGO STORE
// `MongoStore` is a session store for Express and Connect that uses MongoDB natively to store session data on the server-side. It is used to store user sessions in a MongoDB database.

// When using Passport.js with Express.js, you can use `MongoStore` as a session store for persistent sessions. This means that when a user logs in, their session data will be stored in MongoDB and will persist even if the server restarts.
// Package documentation - https://www.npmjs.com/package/connect-mongo

// EXPRESS APPLICATION
var app = express();

// ALLOWS THE USE OF CSS STATIC FILE
app.use(express.static(path.join(__dirname, 'public')));

// RENDER ENGINE
app.engine(
	'.hbs',
	exphbs.engine({
		defaultLayout: 'main',
		partialsDir: './views/partials',
		extname: '.hbs'
	})
);
app.set('view engine', '.hbs');
app.set('views', './views');

// PARSE BODY OBJECT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SESSION STORE IN MONGO
// use the mongo db to save sessions

// initialize the session middleware with options
// it indicates the mongodb as the place to store the sessions

//PASSPORT
// Need to require the entire Passport config module so app.js knows about it - requries that passport.use(stragegy line)
require('./config/passport');

// init the passport middleware so it doesn't get stale - initializes it with each new route

// maintainig the session user - uses the session - gives access to req.session - uses for authentication

// debugging middleware

// user created by passport.authenticate - adds to the reqObject - uses the db id - check compass!

// uses the session.passport.user to see if there is an authenticated (logged in) user

//ROUTES
// Imports all of the routes from ./routes/index.js
var routes = require('./routes/router');
app.use(routes);

// SERVER
// Server listens on http://localhost:3000
const PORT = process.env.PORT;
app.listen(PORT);
