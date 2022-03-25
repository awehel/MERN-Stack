const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator");


const AurorSchema = new mongoose.Schema({
    authorName:{
        type:String,
        required:[true, "Author name is required"],
        minlength: [3, "Minimum of 3 characters"],
        unique: true
    },
    type:{
        type:String,
        required:[true, "Author type is required"],
        enum:[
            "Potion Maker",
            "Transfiguration expert",
            "Legelemens",
            "Herbologist",
            "Duelist"
        ],
    },
    age:{
        type:Number,
        required:[true, "Age is required"],
        min: [13, "Must be at least 13"],
        max: [95, "Cannot be older than 95"]
    },
    auror:{
        type:Boolean,
    },
    newt:{
        type:Number,
        
    },
    
}, {timestamps:true})


AurorSchema.plugin(uniqueValidator);
AurorSchema.plugin(uniqueValidator, {
    message: "Error, expected {PATH} to be unique.",
});
const Author = mongoose.model("Auror", AurorSchema)

module.exports = Author