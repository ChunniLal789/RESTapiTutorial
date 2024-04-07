const { query } = require('express');
const Product = require('../models/product');

const getAllProducts = async(req, res) => {
    const {company, name, feature, select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = { $regex : name, $options : "i" };
    }
    if(feature){
        queryObject.feature = feature;
    }

    let apiData = Product.find(queryObject);
    if(select){
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix);
    }
    const Products = await apiData;
    res.status(200).json({Products, Count : Products.length});
};

const getAllProductsTesting = async(req, res) => {
    const myData = await Product.find(req.query).select('name');
    res.status(200).json(myData);
};

module.exports = {getAllProducts, getAllProductsTesting};