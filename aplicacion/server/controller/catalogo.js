var catalogo = require('../model/catalogo');

exports.getCatalogo= function (req, res){
	catalogo.find( function(err, menu) {
		if (err){
			res.send(err)
		}
		res.json(menu);		
	});
}