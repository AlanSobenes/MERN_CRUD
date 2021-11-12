const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
}, {timestamps: true}) 

const Product = mongoose.model("Product", ProductsSchema)
module.exports = Product
