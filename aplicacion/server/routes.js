require ('./controller/menu');

var userCtrl = require ('./controller/user');
var productoCtrl = require ('./controller/producto');
var proveedorCtrl= require('./controller/proveedor');
var clienteCtrl = require('./controller/cliente');
var ventaCtrl = require('./controller/venta');


module.exports = function(app) {

	/**  Rutas de Usuario  **/
	app.post('/api/user/register', userCtrl.register);
	app.post('/api/user/login', userCtrl.logIn);
	app.get('/api/user/logout', userCtrl.logOut);
	app.get('/api/user/status', userCtrl.status);
	app.get('/api/user/all', userCtrl.getAll);
	app.get('/api/user/permisos', userCtrl.getPermisos);
	app.delete('/api/user/eliminar', userCtrl.eliminar);


	/** Rutas de productos **/
	app.get('/api/producto/all', productoCtrl.getAll);
	app.post('/api/producto/crear', productoCtrl.crear);
	app.put('/api/producto/editar', productoCtrl.editar);
	app.delete('/api/producto/eliminar', productoCtrl.eliminar);


	/*rutas para proveedores*/
	app.get('/api/proveedor/all', proveedorCtrl.getAll);
	app.post('/api/proveedor/crear', proveedorCtrl.crear);
	app.put('/api/proveedor/editar', proveedorCtrl.editar);
	app.delete('/api/proveedor/eliminar', proveedorCtrl.eliminar);


	/*rutas para clientes*/
	app.get('/api/cliente/all', clienteCtrl.getAll);
	app.post('/api/cliente/crear', clienteCtrl.crear);
	app.put('/api/cliente/editar', clienteCtrl.editar);
    app.delete('/api/cliente/eliminar', clienteCtrl.eliminar);

	/*rutas para ventas*/
	app.get('/api/venta/all', ventaCtrl.getAll);
	app.post('/api/venta/crear', ventaCtrl.crear);
	app.put('/api/venta/editar', ventaCtrl.editar);
    app.delete('/api/venta/eliminar', ventaCtrl.eliminar);

	app.get('/*', function(req, res) {
		res.sendfile('./app/index.html');
	});

};
