var Permiso = require('../model/permiso');
var mongoose = require('mongoose');

exports.getPermisos= function (req, res){
    Permiso.aggregate([   
        { $lookup:{ from: "menus", localField: "menu", foreignField: "_id", as: "data" } },
        { $match :{ user : mongoose.Types.ObjectId(req.body.userId) } },
        { $project : { _id: 0 , data : 1 } }  
    ], function(err, permiso) {
        res.json(permiso);		
    });
}




