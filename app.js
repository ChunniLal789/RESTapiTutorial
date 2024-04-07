require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require("./db/connect");

const product_routes = require('./routes/product');

const PORT = process.env.PORT | 5000;

app.get('/', (req, res) => {
    res.send("Hello, we began our tutorial");
})

app.use('/api/products', product_routes);

const start =  () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} connected successfully`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();