require ('./controller/menu');

var userCtrl = require ('./controller/user');
var productoCtrl = require ('./controller/producto');
var proveedorCtrl= require('./controller/proveedor');
var clienteCtrl = require('./controller/cliente');


module.exports = function(app) {

	/**  Rutas de Usuario  **/
	app.post('/api/user/register', userCtrl.register);
	app.post('/api/user/login', userCtrl.logIn);
	app.get('/api/user/logout', userCtrl.logOut);
	app.get('/api/user/status', userCtrl.status);
	app.get('/api/user/all', userCtrl.getAll);
	app.get('/api/user/permisos', userCtrl.getPermisos);

	/** Rutas de productos **/
	app.get('/api/producto/all', productoCtrl.getAll);
	app.post('/api/producto/crear', productoCtrl.crear);
	app.put('/api/producto/', productoCtrl.editar);

	/*rutas para proveedores*/
	app.get('/api/proveedor/all', proveedorCtrl.getAll);
	app.post('/api/proveedor/', proveedorCtrl.crear);
	app.put('/api/proveedor', proveedorCtrl.editar);


	/*rutas para clientes*/
	app.get('/api/cliente/all', clienteCtrl.getAll);
	app.post('/api/cliente/', clienteCtrl.crear);
	app.put('/api/cliente', clienteCtrl.editar);




	app.get('/*', function(req, res) {
		res.sendfile('./app/index.html');
	});

};
