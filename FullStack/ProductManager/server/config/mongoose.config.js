const mongoose = require('mongoose')

const dbName = 'products'
mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
    .then(()=>console.log(`Established a connection to the ${dbName} database`))
    .catch(err=>console.log("Something went wrong when trying to connect to the database", err))