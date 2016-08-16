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
        access: {restricted: true}
    })
    .when('/login', {
        templateUrl: 'view/user/login.html',
        controller: 'loginController',
        access: {restricted: false}
    })
    .when('/logout', {
        controller: 'logoutController',
        access: {restricted: true}
    })
    .when('/register', {
        templateUrl: 'view/user/register.html',
        controller: 'registerController',
        access: {restricted: false}
    })
    .when('/venta', {
        templateUrl: 'view/venta/crear.html',
        controller: 'CrearVentaCtrl',
        access: {restricted: true}
    })
    .when('/compra', {
        templateUrl: 'view/compra/crear.html',
        controller: 'CrearCompraCtrl',
        access: {restricted: true}
    })
    .when('/descarga', {
        templateUrl: 'view/descarga/crear.html',
        controller: 'CrearDescargaCtrl',
        access: {restricted: true}
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
