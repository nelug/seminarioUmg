
var personaCtrl = require ('./controller/persona');
var menuCtrl = require ('./controller/menu');

module.exports = function(app) {

	app.get('/api/menu', menuCtrl.getMenu);
	app.get('/api/persona', personaCtrl.getPersona);
	app.post('/api/persona', personaCtrl.setPersona);
	app.put('/api/persona/:persona_id', personaCtrl.updatePersona);
	app.delete('/api/persona/:persona_id', personaCtrl.removePersona);
	app.get('/', function(req, res) {
		res.sendfile('./app/index.html'); 
	});
};