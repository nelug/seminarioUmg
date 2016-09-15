'use strict';

angular.module('seminarioUmg', 
['ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial', 'md.data.table', 'ngJSONPath', 'toaster'])
.config( function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('brown');
}).run( function ($rootScope, $location, $route, AuthService, $http, jsonPath) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
        AuthService.getUserStatus().then(function() {
            if (next.access.restricted && !AuthService.isLoggedIn()){
                $location.path('/login');
                $route.reload();    
                $rootScope.menus = false;
            }
            
            if(AuthService.isLoggedIn()){
                $http.get('/api/user/permisos').success(function (data) {
                    $rootScope.menus = true;
                    $rootScope.menuPrincipal = jsonPath(jsonPath(data, '$...id'), '$..[?(@.catalogo==0)]');
                    $rootScope.menuCatalogos = jsonPath(jsonPath(data, '$...id'), '$..[?(@.catalogo==1)]');
                    $rootScope.menuConsultas = jsonPath(jsonPath(data, '$...id'), '$..[?(@.catalogo==2)]');
                    $rootScope.menuGraficas  = jsonPath(jsonPath(data, '$...id'), '$..[?(@.catalogo==3)]');
                });
                $rootScope.opFab = { abrir : false, modo : 'md-fling', direction : 'right'};
            }
            
            $rootScope.loginAccess = AuthService.isLoggedIn();
        });
    });
});
