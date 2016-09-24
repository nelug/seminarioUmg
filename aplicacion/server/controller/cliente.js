var Cliente = require('../model/cliente');
var Controlador = require('./ControladorBase');

exports.getAll = function(req, res) {
    Cliente.aggregate([
        { $project: { _id: 1, nit: 1, nombre: 1, direccion: 1, telefono: 1 } }
    ], function(err, cliente) {
        res.json(cliente);
    });
}

exports.crear = function(req, res) {
    Controlador.crear(req, res, Cliente);
}


exports.editar = function(req, res) {
    Controlador.editar(req, res, Cliente);
}

exports.eliminar = function(req, res) {
    Controlador.eliminar(req, res, Cliente);
}