const mongoose = require("mongoose")
const dbName = "auror"

mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to the ${dbName} database!`))
.catch((err)=>console.log(err))