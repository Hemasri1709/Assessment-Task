const mongoose = require("mongoose")
const connectDB = async(req,res) =>{
    try{
        await mongoose.connect("mongodb+srv://guthulahemasri410:Hemasri1709@cluster0.tfekj.mongodb.net/Assessment-Task")
        console.log("MongoDB connected successfully")
    }catch(error){
        console.error(error.message)
    }
}
module.exports = connectDB