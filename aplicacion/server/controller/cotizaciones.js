var Cotizacion = require('../model/cotizacion');
var Controlador = require('./ControladorBase');

exports.getAll = function(req, res) {
}

exports.crear = function(req, res) {
    Controlador.crear(req, res, Cotizacion);
}


exports.editar = function(req, res) {
    Controlador.editar(req, res, Cotizacion);
}

exports.eliminar = function(req, res) {
    Controlador.eliminar(req, res, Cotizacion);
}
