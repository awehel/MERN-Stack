const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "Product title is required"]
    },
    price:{
        type:Number,
        required:[true, "Product price is required"],
        min:[1, "Price must be at least $1"]
    },
    description:{
        type:String,
        required: [true, "Product description is required"],
        maxlength:[50, "Description cannot exceed 50 characters"]
    }
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema)