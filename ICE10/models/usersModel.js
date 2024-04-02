const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ip_address: {
        type: String,
        default: 'active'
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = new mongoose.model('User', userSchema);

module.exports = userModel;