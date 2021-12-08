const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_CONNECT_URL
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to MongoDB Atlas!")
    }).catch((error)=>{console.log("error Cccures !",error)})
}
module.exports = connectToMongo;