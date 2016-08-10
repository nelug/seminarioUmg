

var personaCtrl = require ('./controller/persona');
var menuCtrl = require ('./controller/menu');
var subMenuCtrl = require ('./controller/catalogo');
var userCtrl = require ('./controller/user');

module.exports = function(app) {
	
	app.get('/api/menu', menuCtrl.getMenu);
	app.get('/api/catalogo', subMenuCtrl.getCatalogo);
	app.get('/api/persona', personaCtrl.getPersona);
	app.post('/api/persona', personaCtrl.setPersona);
	app.put('/api/persona/:persona_id', personaCtrl.updatePersona);
	app.delete('/api/persona/:persona_id', personaCtrl.removePersona);
	app.post('/api/user/register', userCtrl.register);
	app.post('/api/user/login', userCtrl.logIn);
	app.get('/api/user/logout', userCtrl.logOut);
	app.get('/api/user/status', userCtrl.status);
	
	app.get('/*', function(req, res) {
		res.sendfile('./app/index.html'); 
	});
};