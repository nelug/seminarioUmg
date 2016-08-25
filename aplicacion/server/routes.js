require ('./controller/menu');

var userCtrl = require ('./controller/user');

module.exports = function(app) {
	
	/**  Rutas de Usuario  **/
	app.post('/api/user/register', userCtrl.register);
	app.post('/api/user/login', userCtrl.logIn);
	app.get('/api/user/logout', userCtrl.logOut);
	app.get('/api/user/status', userCtrl.status);
	app.get('/api/user/permisos', userCtrl.getPermisos);
	
	app.get('/*', function(req, res) {
		res.sendfile('./app/index.html'); 
	});
	
};