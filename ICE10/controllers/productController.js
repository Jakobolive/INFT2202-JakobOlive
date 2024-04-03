
const productModel = require('../models/productsModel');

exports.productList = async (req, res) => {
  try {
    let products = await productModel.find().lean().exec();
    res.render('products', {products: products});
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.productShow = async (req, res) => {
  try {
    let products = await productModel.findById(req.params.id).lean().exec();
    res.render('product/show', {products: products});
  } catch (err) {
    res.status(500).send(err);
  }
};