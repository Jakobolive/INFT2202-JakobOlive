/*
    Name: Jakob Olive (st# 100810499)
    Date: 2024-04-04
    Course: INFT 2202
    File: animalController.js
    File Desc: This file will contain the rendering of all pages that are used for the animals.
*/
const animalModel = require('../models/animalModel');

/* 
This function will render the entry form for the user to input an animal.
*/
exports.entryFormView = (req, res) => {
    res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form'});
};

/*
 This function will be called when the user navigates to the all-animals page, this will render a list of the animals in a visible format.
*/
 exports.animalList = async (req, res) => {
    try {
      let animals = await animalModel.find().lean().exec();
      res.render('animals/all-animals', { pageTitle: 'Animal Database: Animal List', animals: animals});
    } catch (err) {
      res.status(500).send(err);
    }
};

/* 
This function will be called when the user submits the animal entry form, it will check user data and create an animal if the data is valid.
*/
exports.animalSave = async (req, res) => {
  try {
      // Getting input from the form for less code later.
      const zoo = req.body.homeZooInput;
      const scientific_name = req.body.scientificNameInput;
      const common_name = req.body.commonNameInput;
      const given_name = req.body.givenNameInput;
      const gender = req.body.genderRadioButton;
      const date_of_birth = req.body.dateOfBirthInput;
      const age = req.body.ageInput;
      const is_transportable = req.body.transportableRadioButton;
     // Validation section for the user input.
     if (!zoo || zoo.trim() == 0) {
        return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Zoo Location, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
    }
     else if (!scientific_name || scientific_name.trim() == 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Scientific Name, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     else if (!common_name || scientific_name.trim() == 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Common Name, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     else if (!given_name || given_name.trim() == 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Given Name, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     else if (!gender || gender.trim() == 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Select A Gender, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     else if (!date_of_birth || date_of_birth.trim() == 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Date Of Birth, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     else if (isNaN(age) || age < 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'Age Must Be A Number, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     else if (is_transportable.trim() == 0) {
      return res.render('animals/entry-form', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Select Transportability, Please Try Again.', zoo: zoo, scientific_name: scientific_name, common_name: common_name, given_name: given_name, gender: gender, date_of_birth: date_of_birth, age: age, is_transportable: is_transportable });
     }
     // Data must be valid, we can carry on to the next bit of code.
    // Setting the new variables to the new animalModel and saving it to the database.
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

/*
 This function will be called when the user accesses the edit animal page, this will render the page and pass it the animal to be edited to pre populate the form.
*/
 exports.animalEdit = async (req, res) => {
  try{
    let animal = await animalModel.findById(req.params.id).lean().exec();
    res.render('animals/edit-animal', { pageTitle: 'Animal Database: Edit Animal', animal: animal});
  } catch (err) {
    res.status(500).send(err);
  }
};

/*
 This function will be called upon submission of the edit form, this function will validate the user input and update the animal accordingly.
 */
exports.animalUpdate = async (req, res) => {
  try {
    let animal = await animalModel.findById(req.params.id).exec();
    
    // Getting input from the form for less code later.
    const zoo = req.body.homeZooInput;
    const scientific_name = req.body.scientificNameInput;
    const common_name = req.body.commonNameInput;
    const given_name = req.body.givenNameInput;
    const gender = req.body.genderRadioButton;
    const date_of_birth = req.body.dateOfBirthInput;
    const age = req.body.ageInput;
    const is_transportable = req.body.transportableRadioButton;
   // Validation section for the user input.
   if (!zoo || zoo.trim() == 0) {
      return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Zoo Location, Please Try Again.', animal: animal});
  }
   else if (!scientific_name || scientific_name.trim() == 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Scientific Name, Please Try Again.', animal: animal});
   }
   else if (!common_name || scientific_name.trim() == 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Common Name, Please Try Again.', animal: animal});
   }
   else if (!given_name || given_name.trim() == 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Given Name, Please Try Again.', animal: animal});
   }
   else if (!gender || gender.trim() == 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Select A Gender, Please Try Again.', animal: animal});
   }
   else if (!date_of_birth || date_of_birth.trim() == 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Enter A Date Of Birth, Please Try Again.', animal: animal});
   }
   else if (isNaN(age) || age < 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'Age Must Be A Number, Please Try Again.', animal: animal});
   }
   else if (is_transportable.trim() == 0) {
    return res.render('animals/edit-animal', { pageTitle: 'Animal Database: Entry Form', formError:'You Must Select Transportability, Please Try Again.', animal: animal});
   }

    /*
     This section of the code will replace the attributes of the animal with the new and validated user input.
     */
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

/*
 This function will look for the animal passed to it and delete the animal if it exists.
 */
exports.animalDelete = async (req, res) => {
  try {
    let animal = await animalModel.findByIdAndDelete(req.params.id);
    res.redirect('/animals/all-animals');
  }
  catch (err) {
    res.status(500).send(err);
  }
};