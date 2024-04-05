/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: app.js
    File Desc: 
*/

import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    zoo: {
        type: String,
        required: true
    },
    scientific_name: {
        type: String,
        required: true
    },
    common_name: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    is_transportable: {
        type: Boolean,
        required: true
    }     
});

export default mongoose.model('Animal', animalSchema);

// . Zoo: String, required
// ii. Scientific Name: String, required
// iii. Common Name: String, required
// iv. Given Name: String, required
// v. Gender: String, required
// vi. Date of Birth: String, required
// vii. Age: Number, required
// viii. isTransportable: Boolean, required