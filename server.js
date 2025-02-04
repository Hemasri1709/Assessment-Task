const express = require("express")
const app = express()
const mongoose = require("mongoose")
const connectDB = require("./config.js")

app.use(express.json())
app.get("/",()=> {
    res.status(400).send("Hello World")
})

connectDB()
app.listen(8000, async (req, res)=>{
    console.log("Listening to port 8000")
})