'use strict';

angular.module('seminarioUmg', ['ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial', 'ngJSONPath', 'toaster', 'datatables', 'nvd3', 'ngStorage', 'angular-md5', 'focus-if', 'templates']).config( function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('brown');
}).run( function ($rootScope, $location, $route, AuthService, $http, jsonPath, DTDefaultOptions, $localStorage) {
    //configuracion para datatables
    DTDefaultOptions.setLanguageSource('lang/es.json');
    DTDefaultOptions.setLoadingTemplate('<div class="loader-tabla"><img src="img/loading.gif"></div>');
    DTDefaultOptions.setDOM('lfrtip');

    //configuracion para login
    $rootScope.$on('$routeChangeStart', function (event, next) {
        AuthService.getUserStatus().then(function() {
            if (next.access.restricted && !AuthService.isLoggedIn()){
                $location.path('/login');
                $route.reload();
                $rootScope.menus = false;
            }

            if(AuthService.isLoggedIn()){
                $http.get('/api/v1/user/permisos/'+$rootScope.userNow.id+'?token='+$localStorage.token).success(function (data) {
                    $rootScope.menus = true;
                    $rootScope.menuPrincipal = jsonPath(data, '$.[?(@.catalogo==0)]');
                    $rootScope.menuCatalogos = jsonPath(data, '$.[?(@.catalogo==1)]');
                    $rootScope.menuConsultas = jsonPath(data, '$.[?(@.catalogo==2)]');
                    $rootScope.menuGraficas  = jsonPath(data, '$.[?(@.catalogo==3)]');
                });
            }
            $rootScope.ocultarMenu = false;
            $rootScope.loginAccess = AuthService.isLoggedIn();
        });
    });
});
