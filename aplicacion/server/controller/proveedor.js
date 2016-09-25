var Proveedor = require('../model/proveedor');

exports.getAll = function(req, res) {
    Proveedor.aggregate([
        { $project : { _id : 1 , nit : 1, empresa: 1, representante: 1, telefono: 1, direccion: 1 } }
    ], function(err, proveedor) {
        res.json(proveedor);
    });
}


exports.crear = function(req, res) {
    Controlador.crear(req, res, Proveedor);
}


exports.editar = function(req, res) {
    Controlador.editar(req, res, Proveedor);
}

exports.eliminar = function(req, res) {
    Controlador.eliminar(req, res, Proveedor);
}
