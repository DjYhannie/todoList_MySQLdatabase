const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(bodyParser.json());
//sequelize
const {DataTypes} = require('sequelize');
//connection
const conn = require("./database");

const model = require('./models/todo');
 
const todoRoute = require('./routes/todoRoute');
const { Model } = require('mongoose');
app.use('/todo',todoRoute);


app.listen(8000, ()=>{
    console.log("The app is listening on port 8000!")
});
