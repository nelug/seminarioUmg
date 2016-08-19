'use strict';

angular.module('seminarioUmg', 
['ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial', 'md.data.table', 'ngJSONPath'])
.config( function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('blue');
}).run( function ($rootScope, $location, $route, AuthService, $http, jsonPath) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
        AuthService.getUserStatus().then(function() {
            if (next.access.restricted && !AuthService.isLoggedIn()){
                $location.path('/login');
                $route.reload();    
                $rootScope.menus = false;
            }
            if (!$rootScope.menus) {
                $http.get('/api/user/status-id').success(function(user) {
                    if(user.status){
                        $http.get('/api/user/permisos').success(function (data) {
                            $rootScope.menus = true;
                            $rootScope.menuPrincipal = jsonPath(data, '$..permisos[?(@.catalogo==0)]');
                            $rootScope.menuCatalogos = jsonPath(data, '$..permisos[?(@.catalogo==1)]');
                            $rootScope.menuConsultas = jsonPath(data, '$..permisos[?(@.catalogo==2)]');
                            $rootScope.menuGraficas  = jsonPath(data, '$..permisos[?(@.catalogo==3)]');
                            
                            console.log();
                        });
                    }
                });
            }
            $rootScope.loginAccess = AuthService.isLoggedIn();
        });
    });
});
