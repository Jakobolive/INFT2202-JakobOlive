/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: animalController.js
    File Desc: This file will contain the rendering of all pages that are used for the animals.
*/
const animalModel = require('../models/animalModel');

//
exports.entryFormView = (req, res) => {
    res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form'});
};

//
exports.animalList = async (req, res) => {
    try {
      let animals = await animalModel.find().lean().exec();
      res.render('animals/all-animals', { pageTitle: 'Animal Database: Animal List', animals: animals});
    } catch (err) {
      res.status(500).send(err);
    }
};

//
exports.animalSave = async (req, res) => {
  try {
     // Validation section
     if (!req.body.homeZooInput) {
      return res.status(400).send("Home Zoo is required.");
    }
    //
    let animal = new animalModel({
    zoo: req.body.homeZooInput,
    scientific_name: req.body.scientificNameInput,
    common_name: req.body.commonNameInput,
    given_name: req.body.givenNameInput,
    gender: req.body.genderRadioButton,
    date_of_birth: req.body.dateOfBirthInput,
    age: req.body.ageInput,
    is_transportable: req.body.transportableRadioButton === 'true'
    });
    animal.save();
    res.redirect('all-animals');
  }
  catch (err) {
    res.status(500).send(err);
  }
};

//
exports.animalEdit = async (req, res) => {
  try{
    let animal = await animalModel.findById(req.params.id).lean().exec();
    res.render('animals/edit-animal', { pageTitle: 'Animal Database: Edit Animal', animal: animal});
  } catch (err) {
    res.status(500).send(err);
  }
};

//
exports.animalUpdate = async (req, res) => {
  try {
    let animal = await animalModel.findById(req.params.id).exec();
    // Validation section
     if (!req.body.homeZooInput) {
      return res.status(400).send("Home Zoo is required.");
    }
    //
    animal.zoo = req.body.homeZooInput;
    animal.scientific_name = req.body.scientificNameInput;
    animal.common_name = req.body.commonNameInput;
    animal.given_name = req.body.givenNameInput;
    animal.gender = req.body.genderRadioButton;
    animal.date_of_birth = req.body.dateOfBirthInput;
    animal.age = req.body.ageInput;
    animal.is_transportable = req.body.transportableRadioButton === 'true';
    animal.save();
    res.redirect('/animals/all-animals');
  }
  catch (err) {
    res.status(500).send(err);
  }
};

//
exports.animalDelete = async (req, res) => {
  try {
    let animal = await animalModel.findByIdAndDelete(req.params.id);
    res.redirect('/animals/all-animals');
    //res.redirect('all-animals');
  }
  catch (err) {
    res.status(500).send(err);
  }
};