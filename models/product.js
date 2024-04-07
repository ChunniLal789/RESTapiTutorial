const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : [true, "price must be specified"]
    },
    feature : {
        type : Boolean,
        default : false
    },
    rating : {
        type : Number,
        default : 4.5
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    company : {
        type : String,
        enum : {
            values : ['apple', 'mi', 'samsung', 'redmi'],
            message : "this value is not supported"
        }
    }
})

module.exports = mongoose.model('Product', productSchema);
