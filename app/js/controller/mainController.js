'use strict';

angular.module('seminarioUmg').controller('MainController', 
['$scope', 'MainService', '$mdSidenav', '$rootScope', '$location', '$mdBottomSheet', 'AuthService', 'jsonPath',
function( $scope, MainService, $mdSidenav, $rootScope, $location, $mdBottomSheet, AuthService, jsonPath) {
    
    $scope.getCatalogos = function () {
        $mdBottomSheet.show({
            templateUrl: 'view/plantillas/catalogo.html',
            controller: 'CatalogoCtrl',
            clickOutsideToClose: true
        });
    };
    
    $scope.getConsultas = function () {
        $mdBottomSheet.show({
            templateUrl: 'view/plantillas/catalogo.html',
            controller: 'ConsultasCtrl',
            clickOutsideToClose: true
        });
    };
    
    $scope.getGraficas = function () {
        $mdBottomSheet.show({
            templateUrl: 'view/plantillas/catalogo.html',
            controller: 'GraficasCtrl',
            clickOutsideToClose: true
        });
    };
    
    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };
    
    $scope.verLink = function(link) {
        $location.path(link);
    };
    
    $scope.logout = function () {
        AuthService.logout().then(function () {
            $location.path('/login');
        });
        
        $rootScope.loginAccess = false;
    };
}]);
