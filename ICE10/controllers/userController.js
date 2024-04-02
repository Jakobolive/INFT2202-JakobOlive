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