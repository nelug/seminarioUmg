var express=require('express');
var mongoose=require('mongoose');
var bodyParser  = require("body-parser");
var relationship = require("mongoose-relationship");

var app=express();
var port =process.env.PORT || 3000; 

mongoose.connect('mongodb://localhost/local');
app.use(express.static(__dirname+'/app'));
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  

require('./app/js/routes.js')(app);
app.listen(port);
console.log('APP MEAN en el puerto: '+port);