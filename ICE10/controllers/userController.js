const userModel = require('../models/usersModel');

exports.userList = async (req, res) => {
  try {
    let users = await userModel.find().lean().exec();
    res.render('home', {users: users});
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.userShow = async (req, res) => {
  try {
    let user = await userModel.findById(req.params.id).lean().exec();
    res.render('user/show', {user: user});
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.userCreate = async (req, res) => {
  res.render('user/create');
};

exports.userStore = async (req, res) => {
  try {
    let user = new userModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      ip_address: req.body.ip_address,
      password: req.body.password
    });
    user.save();
    res.redirect('/');
  }
  catch (err) {
    res.status(500).send(err);
  }
};

exports.userEdit = async (req, res) => {
  try{
    let user = await userModel.findById(req.params.id).lean().exec();
    res.render('user/edit', {user: user});
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.userUpdate = async (req, res) => {
  try {
    let user = await userModel.findById(req.params.id).exec();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.gender = req.body.gender;
    user.ip_address = req.body.ip_address;
    user.password = req.body.password;
    user.save();
    res.redirect('/'+req.params.id);
  }
  catch (err) {
    res.status(500).send(err);
  }
};

// The user.remove() function shown in class would fail constantly, found a way around it with the fineByIdAndDelete()
exports.userDelete = async (req, res) => {
  try {
    let user = await userModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
  }
  catch (err) {
    res.status(500).send(err);
  }
};