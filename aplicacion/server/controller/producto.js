var Producto = require('../model/producto');

exports.getAll = function(req, res) {
    Producto.aggregate([
        { $project : { _id : 1 , codigo : 1, descripcion: 1, marca: 1, precioVenta: 1, existencia: 1 } }
    ], function(err, producto) {
        res.json(producto);
    });
}

exports.crear = function(req, res) {
    Producto.create(req.body, function (err) {
        if (err) {
            return res.json({
                resultado: false,
                mensaje: error
            });
        }
        
        else {
            res.json({
                resultado: true,
                mensaje: "Producto almacenado con exito."
            });
        }
    });
}

exports.editar = function(req, res) {

}

exports.eliminar = function(req, res) {

}
