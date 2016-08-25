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
      access: {restricted: true}
   })
   /**
   Rutas para usuario
   **/
   .when('/login', {
      templateUrl: 'view/user/login.html',
      controller: 'loginController',
      access: {restricted: false}
   })
   .when('/register', {
      templateUrl: 'view/user/crear.html',
      controller: 'registerController',
      access: {restricted: false}
   })
   .when('/permisos',{
      templateUrl:'view/user/permisos.html',
      controller: 'permisoController',
      access: {restricted: false}
   })
   .when('/usuarios',{
      templateUrl:'view/user/tabla.html',
      controller: 'userTablaCtrl',
      access: {restricted: false}
   })
   /**
   Rutas para ventas
   **/
   .when('/venta', {
      templateUrl: 'view/venta/crear.html',
      controller: 'CrearVentaCtrl',
      access: {restricted: true}
   })
   /**
   Rutas para compras
   **/
   .when('/compra', {
      templateUrl: 'view/compra/crear.html',
      controller: 'CrearCompraCtrl',
      access: {restricted: true}
   })
   /**
   Rutas para descargas
   **/
   .when('/descarga', {
      templateUrl: 'view/descarga/crear.html',
      controller: 'CrearDescargaCtrl',
      access: {restricted: true}
   })
   .otherwise({
      redirectTo: '/'
   });
}]);
