var Persona = require('../model/persona');

exports.getPersona = function (req, res){
	Persona.find( function(err, persona) {
		if (err){
			res.send(err)
		}
		res.json(persona);		
	});
}

exports.setPersona = function(req, res){
	Persona.create(
		{
			nombre : req.body.nombre,
			apellido: req.body.apellido, 
			edad: req.body.edad
		}, 
		function(err, persona) {
			if (err){
				res.send(err);
			}
			Persona.find(function(err, persona) {
				if (err){
					res.send(err)
				}
				res.json(persona);
			});
		}
	);
}

exports.updatePersona = function(req, res){
	Persona.update( 
		{
			_id : req.params.persona_id
		},
		{
			$set:
			{
				nombre : req.body.nombre,
				apellido: req.body.apellido, 
				edad: req.body.edad
			}
		}, 
		function(err, persona) {
			if (err){
				res.send(err);
			}
			Persona.find(function(err, persona) {
				if (err){
					res.send(err)
				}
				res.json(persona);
			});
		}
	);
}

exports.removePersona = function(req, res) {
	Persona.remove(
		{
			_id : req.params.persona_id
		}, 
		function(err, persona){
			if (err){
				res.send(err);
			}
			Persona.find(function(err, persona) {
				if (err){
					res.send(err)
				}
				res.json(persona);
			});
		}
	);
}