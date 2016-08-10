var express=require('express');
var mongoose=require('mongoose');
var bodyParser  = require("body-parser");
var relationship = require("mongoose-relationship");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var hash = require('bcrypt-nodejs');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local' ).Strategy;

mongoose.connect('mongodb://localhost/inventario');
var User = require('./server/model/user.js');
var app=express();
var port =process.env.PORT || 3000; 

app.use(express.static(__dirname+'/app'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(cookieParser());
app.use(bodyParser.json());  
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require('./server/routes.js')(app);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port);
console.log('APP MEAN en el puerto: '+port);