const mongoose = require("mongoose")
const item = require("./itemModel")
const restaurentSchema = new mongoose.Schema({
    Name : {
        type: String,
        required: true
    },
    City : {
        type: String,
        required: true
    },
    ItemsArray:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Item"
    }]
})
module.exports = mongoose.model("restaurent", restaurentSchema)