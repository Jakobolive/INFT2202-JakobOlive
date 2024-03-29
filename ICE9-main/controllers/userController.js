exports.userView = (req, res) => {
  res.render('home');
}
exports.aboutUsView = (req, res) => {
  res.render('aboutUs');
}
exports.questionsView = (req, res) => {
  const message = req.query.message;
  res.render('questions', { message: message });
}