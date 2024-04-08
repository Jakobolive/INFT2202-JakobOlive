/*
    Name: Jakob Olive
    Date: 2024-04-04
    Course: INFT 2202
    File: animalController.js
    File Desc: This file will contain the rendering of all pages that are used for the animals.
*/
const animalModel = require('../models/animalModel');

exports.entryFormView = (req, res) => {
    res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form'});
}

exports.animalList = async (req, res) => {
    try {
      let animals = await animalModel.find().lean().exec();
      res.render('animals/all-animals', {pageTitle: 'Animal Database: Animal List'}, {animals: animals});
    } catch (err) {
      res.status(500).send(err);
    }
  };
