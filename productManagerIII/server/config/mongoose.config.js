const mongoose = require("mongoose")
const db_name = 'ProductsSchema'

mongoose.connect("mongodb://localhost/"+ db_name,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${db_name}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err))