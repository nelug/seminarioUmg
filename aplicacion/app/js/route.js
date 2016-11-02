'use strict';

angular.module('seminarioUmg')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
    .when('/', {
        templateUrl: 'view/home.html',
        controller: 'loginController',
        access: {
            restricted: true
        }
    })
    /** Rutas para usuario **/
    .when('/login', {
        templateUrl: 'view/user/login.html',
        controller: 'loginController',
        access: {
            restricted: false
        }
    })
    .when('/register', {
        templateUrl: 'view/user/crear.html',
        controller: 'registerController',
        access: {
            restricted: false
        }
    })
    /** Rutas para catalogos **/
    .when('/usuarios',{
        templateUrl:'view/user/tabla.html',
        controller: 'userTablaCtrl',
        access: {
            restricted: true
        }
    })
    .when('/clientes',{
        templateUrl: 'view/cliente/tabla.html',
        controller: 'clienteTablaCtrl',
        access:{
            restricted: true
        }
    })
   //ruta para crear un cliente
    .when('/clientes/crear',{
        templateUrl: 'view/cliente/tabla.html',
        controller: 'CrearClienteCtrl',
        access:{
            restricted: true
        }
    })
    //ruta para editar un cliente
    .when('/clientes/editar',{
        templateUrl: 'view/cliente/tabla.html',
        controller: 'EditarClienteCtrl',
        access:{
            restricted: true
        }
    })
    //ruta para editar un cliente
    .when('/clientes/eliminar',{
        templateUrl: 'view/cliente/tabla.html',
        controller: 'EliminarClienteCtrl',
        access:{
            restricted: true
        }
    })
    //ruta para mostrar proveedores
    .when('/proveedores',{
        templateUrl: 'view/proveedor/tabla.html',
        controller: 'proveedorTablaCtrl',
        access: {
            restricted: true
        }
    })
    //ruta para crear proveedores
    .when('/proveedores/crear',{
        templateUrl: 'view/proveedor/tabla.html',
        controller: 'CrearProveedorCtrl',
        access: {
            restricted: true
        }
    })
    /** Rutas para productos **/
    .when('/productos',{
        templateUrl: 'view/producto/tabla.html',
        controller: 'productoTablaCtrl',
        access: {
            restricted: true
        }
    })
    /*ruta para crear productos*/
    .when('/productos/crear',{
        templateUrl: 'view/producto/tabla.html',
        controller: 'CrearProductoCtrl',
        access: {
            restricted: true
        }
    })
    /** Rutas para ventas **/
    .when('/venta', {
        templateUrl: 'view/venta/crear.html',
        controller: 'CrearVentaCtrl',
        access: {
            restricted: true
        }
    })
    /**  Rutas para compras  **/
    .when('/compra', {
        templateUrl: 'view/compra/crear.html',
        controller: 'CrearCompraCtrl',
        access: {
            restricted: true
        }
    })
    /** Rutas para descargas **/
    .when('/descarga', {
        templateUrl: 'view/descarga/crear.html',
        controller: 'CrearDescargaCtrl',
        access: {
            restricted: true
        }
    })
    /** Rutas para cotizacion **/
    .when('/cotizacion',{
        templateUrl: 'view/cotizacion/crear.html',
        controller: 'CrearCotizacionCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para consultar ventas
    .when('/consulta-ventas',{
        templateUrl: 'view/consultas/ventas.html',
        controller: 'consultarVentasCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para consultar compras
    .when('/consulta-compras',{
        templateUrl: 'view/consultas/compras.html',
        controller: 'consultarCompraCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para consultar cotizaciones
    .when('/consulta-cotizaciones',{
        templateUrl: 'view/consultas/cotizaciones.html',
        controller: 'consultarCotizacionCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para consultar descargas
    .when('/consulta-descargas',{
        templateUrl: 'view/consultas/descargas.html',
        controller: 'consultarDescargaCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para consultar graficas de ventas
    .when('/graficas-ventas',{
        templateUrl: 'view/graficas/ventas.html',
        controller: 'graficaVentaCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para consultar graficas de compras
    .when('/graficas-compras',{
        templateUrl: 'view/graficas/compra.html',
        controller: 'graficaCompraCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para el listado de inventario
    .when('/inventario',{
        templateUrl: 'view/inventario/tabla.html',
        controller: 'inventarioTablaCtrl',
        access:{
            restricted :true
        }
    })
    //ruta para el listado de productos agotados
    .when('/productos-agotados',{
        templateUrl: 'view/productos-agotados/tabla.html',
        controller: 'existenciaTablaCtrl',
        access:{
            restricted :true
        }
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
