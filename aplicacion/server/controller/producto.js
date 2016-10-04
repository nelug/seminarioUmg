var Producto = require('../model/producto');
var Controlador = require('./ControladorBase');

exports.getAll = function(req, res) {
    Producto.aggregate([
        { $project : { _id : 1 , codigo : 1, descripcion: 1, marca: 1, precioCosto: 1,precioVenta: 1, existenciaMin: 1 } }
    ], function(err, producto) {
        res.json(producto);
    });
}

exports.crear = function(req, res) {
    Controlador.crear(req, res, Producto);
}


exports.editar = function(req, res) {
    Controlador.editar(req, res, Producto);
}

exports.eliminar = function(req, res) {
    Controlador.eliminar(req, res, Producto);
}
