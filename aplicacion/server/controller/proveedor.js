var Proveedor = require('../model/proveedor');

exports.getAll = function(req, res) {
    Proveedor.aggregate([
        { $project : { _id : 1 , nit : 1, empresa: 1, representante: 1, telefono: 1, direccion: 1 } }
    ], function(err, proveedor) {
        res.json(proveedor);
    });
}


exports.crear = function(req, res) {
    Proveedor.create({nit: req.body.nit, empresa: req.body.empresa, representante: req.body.representante,
        telefono: req.body.telefono, direccion: req.body.direccion},
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
                mensaje: "proveedor almacenado con exito."
            });
        }
    });
}

exports.editar = function(req, res){
	Proveedor.update( {_id : req.body._id},
					{$set:{nit : req.body.nit, empresa: req.body.empresa, representante: req.body.representante,
                           telefono:req.body.telefono, direccion: req.body.direccion}},
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
                            mensaje: "Proveedor actualizado con exito."
                        });
                    }

			});
	}

    exports.eliminar = function(req, res){
        Proveedor.remove( {_id : req.query.id},  function (err) {
            if (err) {
                return res.json({
                    resultado: false,
                    mensaje: err
                });
            } else {
                res.json({
                    resultado: true,
                    mensaje: "Proveedor eliminado con exito."
                });
            }
        });
    }
