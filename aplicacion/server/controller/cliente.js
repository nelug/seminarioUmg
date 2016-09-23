var Cliente = require('../model/cliente');

exports.getAll = function(req, res) {
    Cliente.aggregate([
        { $project : { _id : 1 , nit : 1, nombre: 1, direccion: 1, telefono: 1 } }
    ], function(err, cliente) {
        res.json(cliente);
    });
}

exports.crear = function(req, res) {
    Cliente.create(req.body, function (err) {
        if (err) {
            return res.json({
                resultado: false,
                mensaje: err
            });
        } else {
            res.json({
                resultado: true,
                mensaje: "Cliente almacenado con exito."
            });
        }
    });
}


exports.editar = function(req, res){
    Cliente.update( {_id : req.body._id}, {
        $set: {
            nit : req.body.nit, 
            nombre: req.body.nombre, 
            direccion: req.body.direccion, 
            telefono:req.body.telefono
        }
    }, function (err) {
        if (err) {
            return res.json({
                resultado: false,
                mensaje: err
            });
        } else {
            res.json({
                resultado: true,
                mensaje: "Cliente actualizado con exito."
            });
        }
        
    });
}

exports.eliminar = function(req, res){
    Cliente.remove( {_id : req.query.id},  function (err) {
        if (err) {
            return res.json({
                resultado: false,
                mensaje: err
            });
        } else {
            res.json({
                resultado: true,
                mensaje: "Cliente eliminado con exito."
            });
        }
    });
}
