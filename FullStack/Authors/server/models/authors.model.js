const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Author name is required"],
        min: [3, "Minimum of 3 characters"]
    }
}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author