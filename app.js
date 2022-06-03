const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
var config = require("./_config");
const dotenv = require('dotenv').config();
const environmant = app.settings.env;
const path = require('path');


var appv2 = require('./app.v2.js');

//port setup - app start declaration
var port = process.env.PORT || 9000;
console.log("Application Environment : " + environmant);


//CORS setup
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//V2
app.use('/v1', appv2);

//V3 - WHEN DEVELOPED


mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://yagnesh:mlab123@cluster0-s1fce.mongodb.net/carrental?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology:true }).then(() => {
    console.log("Connecting to the DB at: " + config.mongoURI[app.settings.env]);
}, (error) => {
    console.log("Something went wrong!! ", error);
});


app.listen(port, () => {
    console.log("Server started on port: " + port);
})



module.exports = app;
