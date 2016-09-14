require ('./controller/menu');

var userCtrl = require ('./controller/user');
var productoCtrl = require ('./controller/producto');

module.exports = function(app) {
	
	/**  Rutas de Usuario  **/
	app.post('/api/user/register', userCtrl.register);
	app.post('/api/user/login', userCtrl.logIn);
	app.get('/api/user/logout', userCtrl.logOut);
	app.get('/api/user/status', userCtrl.status);
	app.get('/api/user/all', userCtrl.getAll);
	app.get('/api/user/permisos', userCtrl.getPermisos);
	
	/** Rutas de productos **/
	app.get('/api/productos/all', productoCtrl.getAll);
	app.post('/api/productos/', productoCtrl.crear);
	app.put('/api/productos/', productoCtrl.editar);
	
	app.get('/*', function(req, res) {
		res.sendfile('./app/index.html'); 
	});
	
};