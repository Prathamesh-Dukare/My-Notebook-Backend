const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/my-notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongo!")
    })
}
module.exports = connectToMongo;