const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String
    },
    product_sku: {
        type: String
    },
    price: {
        type: Number
    },
    company: {
        type: String
    }
});

const productsModel = new mongoose.model('Product', productSchema);

module.exports = productsModel;