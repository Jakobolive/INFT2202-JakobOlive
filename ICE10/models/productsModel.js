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

const productModel = new mongoose.model('Product', productSchema);
module.exports = productModel;