const mongoose = require("mongoose")
const itemSchema = new mongoose.Schema({
    Name : {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },

    
})
module.exports = mongoose.model("item",itemSchema)