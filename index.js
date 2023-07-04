const express = require('express')
require('dotenv').config();
const app = express();

const port = process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})
app.listen(port,() =>{
    console.log(`running on ${port}`)
})