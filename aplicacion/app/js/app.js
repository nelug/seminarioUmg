'use strict';

angular.module('seminarioUmg', ['ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial', 'ngJSONPath', 'toaster', 'datatables', 'nvd3']).config( function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('brown');
}).run( function ($rootScope, $location, $route, AuthService, $http, jsonPath, DTDefaultOptions) {
    //configuracion para datatables
    DTDefaultOptions.setLanguageSource('lang/es.json');
    DTDefaultOptions.setLoadingTemplate('<div class="loader-tabla"><img src="img/loading.gif"></div>');

    //configuracion para login
    $rootScope.$on('$routeChangeStart', function (event, next) {
        AuthService.getUserStatus().then(function() {
            if (next.access.restricted && !AuthService.isLoggedIn()){
                $location.path('/login');
                $route.reload();
                $rootScope.menus = false;
            }

            if(AuthService.isLoggedIn()){
                $http.get('/api/v1/user/permisos/1').success(function (data) {
                    $rootScope.menus = true;
                    //$rootScope.userId = data[0]._id;
                    $rootScope.menuPrincipal = jsonPath(data, '$.[?(@.catalogo==0)]');
                    $rootScope.menuCatalogos = jsonPath(data, '$.[?(@.catalogo==1)]');
                    $rootScope.menuConsultas = jsonPath(data, '$.[?(@.catalogo==2)]');
                    $rootScope.menuGraficas  = jsonPath(data, '$.[?(@.catalogo==3)]');
                });
            }

            $rootScope.loginAccess = AuthService.isLoggedIn();
        });
    });
});
