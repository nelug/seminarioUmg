var User = require('../model/user');
var passport = require('passport');
var mongoose = require('mongoose');

exports.logIn = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            res.status(200).json({
                status: 'Login successful!'
            });
        });
    })(req, res, next);
}

exports.logOut = function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
}

exports.getPermisos = function (req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    
    User.find({ _id: mongoose.Types.ObjectId("57aab9fd820c12ae29486b6f") })
    .populate('permisos.id')
    .select('permisos')
    .exec(function(error, users) {
        res.json(users);
    });
}

exports.getAll = function(req, res) {
    User.aggregate([ 
        { $project : { _id : 1 , username : 1, nombre: 1, apellido: 1, correo: 1 } } 
    ], function(err, users) {
        res.json(users);		
    });
}

exports.status = function(req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    res.status(200).json({
        status: true
    });
}

exports.register = function(req, res) {
    User.register(
        new User({ 
            username: req.body.username, 
            nombre:   req.body.nombre, 
            apellido: req.body.apellido 
        }),
        req.body.password, function(err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        }
    );
}