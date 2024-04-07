/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: app.js
    File Desc: 
*/
// Imports.
import mongoose from 'mongoose';

// Creating the animal schema to retrieve and formate data for mongoDB.
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

// Exporting the animal schema.
const animalModel = new mongoose.model('Animal', animalSchema);
module.exports = animalModel;

