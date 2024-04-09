const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './process.env' });

//  Connect to MongoDB Server using the connection string in the `.env` file.

const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register

const UserSchema = new mongoose.Schema({
	username: String,
	hash: String,
	salt: String,
	isAdmin: { type: Boolean, requried: true, default: true }
});

const User = connection.model('User', UserSchema);
// Expose the connection
module.exports = connection;
