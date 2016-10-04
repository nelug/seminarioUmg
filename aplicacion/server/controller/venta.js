var Venta = require('../model/venta');
var Controlador = require('./ControladorBase');

exports.getAll = function(req, res) {
    Venta.find().
    populate({
        path: 'cliente',
        select: 'nombre'
    }).
    populate({
        path: 'usuario',
        select: 'nombre'
    }).
    populate({
        path: 'detalle.producto',
        select: 'descripcion'
    }).
    exec(function(error, ventas) {
        res.json(ventas);
    });
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
