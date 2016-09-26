exports.crear = function(req, res, model) {
    model.create(req.body, function(err) {
        if (err) {
            console.log(String (err));
            return res.json({
                resultado: false,
                mensaje: err.errors
            });
        } else {
            res.json({
                resultado: true,
                mensaje: "Registro almacenado con exito."
            });
        }
    });
}

exports.editar = function (req, res, model) {
    model.update({ _id: req.body._id }, {
        $set: req.body
    }, function(err) {
        if (err) {
            console.log(String (err));
            return res.json({
                resultado: false,
                mensaje: err
            });
        } else {
            res.json({
                resultado: true,
                mensaje: "Registro actualizado con exito."
            });
        }

    });
}

exports.eliminar = function(req, res, model) {
    model.remove({ _id: req.query.id }, function(err) {
        if (err) {
            return res.json({

                resultado: false,
                mensaje: err
            });
        } else {
            res.json({
                resultado: true,
                mensaje: "Registro eliminado con exito."
            });
        }
    });
}
