var Producto = require('../model/producto');

exports.getAll = function(req, res) {
    Producto.aggregate([ 
        { $project : { _id : 1 , codigo : 1, descripcion: 1, marca: 1, precioVenta: 1, existencia: 1 } } 
    ], function(err, producto) {
        res.json(producto);		
    });
}

exports.crear = function(req, res) {

}