var Venta = require('../model/venta');
var Controlador = require('./ControladorBase');

exports.getAll = function(req, res) {
}

exports.crear = function(req, res) {
    req.body.usuario = req.user._id;
    Controlador.crear(req, res, Venta);
}


exports.editar = function(req, res) {
    Controlador.editar(req, res, Venta);
}

exports.eliminar = function(req, res) {
    Controlador.eliminar(req, res, Venta);
}
