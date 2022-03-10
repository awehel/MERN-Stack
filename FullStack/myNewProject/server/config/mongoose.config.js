const mongoose = require('mongoose')


const dbName = 'crmdb'
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
    .then(()=>console.log("Established a connection to the " + dbName +" database"))
    .catch(err=>console.log("Something went wrong when connecting to the database", err))