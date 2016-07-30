var Menu = require('../model/menu');

exports.getMenu= function (req, res){
	Menu.find( function(err, menu) {
		if (err){
			res.send(err)
		}
		res.json(menu);		
	});
}