/*
    Name: Jakob Olive
    Date: 2024-04-07
    Course: INFT 2202
    File: indexController.js
    File Desc: This file will contain the basic export of the view for the index page.
*/
exports.indexView = (req, res) => {
    res.render('index', { pageTitle: 'Animal Database: Index' });
}