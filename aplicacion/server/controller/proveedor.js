var Proveedor = require('../model/proveedor');

exports.getAll = function(req, res) {
    Proveedor.aggregate([
        { $project : { _id : 1 , nit : 1, empresa: 1, representante: 1, telefono: 1, direccion: 1 } }
    ], function(err, proveedor) {
        res.json(proveedor);
    });
}

exports.crear = function(req, res) {
    Proveedor.create(req.body, function (err) {
        if (err) {
            return res.json({
                resultado: false,
                mensaje: error
            });
        }

        else {
            res.json({
                resultado: true,
                mensaje: "Proveedor almacenado con exito."
            });
        }
    });
}

exports.editar = function(req, res) {

}

exports.eliminar = function(req, res) {

}
