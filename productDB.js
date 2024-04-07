const mongoose = require('mongoose');

const connectDB = require('./db/connect');
const Product = require('./models/product');
const ProductJson = require('./product.json');

const start = async() => {
    try {
        await Product.insertMany(ProductJson);
        console.log("Data transfer successful")
    } catch (error) {
        console.log(error);
    }
}

start();
