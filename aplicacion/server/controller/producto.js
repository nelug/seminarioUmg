var Producto = require('../model/producto');

exports.getAll = function(req, res) {
    Producto.aggregate([
        { $project : { _id : 1 , codigo : 1, descripcion: 1, marca: 1, precioVenta: 1,precioCosto: 1, existencia: 1 } }
    ], function(err, producto) {
        res.json(producto);
    });
}

exports.crear = function(req, res) {
    Producto.create({codigo: req.body.codigo, descripcion: req.body.descripcion, marca: req.body.marca,
        precioVenta: req.body.precioVenta, precioCosto: req.body.precioCosto, existencia: req.body.existencia},
        function (err) {
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

exports.editar = function(req, res){
	Producto.update( {_id : req.body._id},
					{$set:{codigo : req.body.codigo, descripcion: req.body.descripcion, marca: req.body.marca,
                           precioVenta:req.body.precioVenta, precioCosto: req.body.precioCosto, existencia: req.body.existencia}},
                    function (err) {
                    if (err) {
                        return res.json({
                            resultado: false,
                            mensaje: err
                        });
                    }

                    else {
                        res.json({
                            resultado: true,
                            mensaje: "Producto actualizado con exito."
                        });
                    }

			});
	}


exports.eliminar = function(req, res) {

}
