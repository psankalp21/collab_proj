const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

const abhijeetRoute = require('./route/abhijeet')
const deepanshuRoute = require('./route/deepanshu')
 const sankalpRoute = require('./route/sankalp')

const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(abhijeetRoute);
 app.use(deepanshuRoute);
 app.use(sankalpRoute);

app.listen(port,() =>{
    console.log("running")
})

