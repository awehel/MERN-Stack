const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Author name is required"],
        minlength: [3, "Minimum of 3 characters"],
        unique: [true, "This entry already exists"]
    }
}, {timestamps:true})

AuthorSchema.plugin(uniqueValidator, {message:'{PATH} must be unique'})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author