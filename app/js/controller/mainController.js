'use strict';

angular.module('seminarioUmg')
.controller('MainController', ['$scope', 'MainService', '$mdSidenav', '$rootScope', '$location', '$mdBottomSheet',
function( $scope, MainService, $mdSidenav, $rootScope, $location, $mdBottomSheet) {
    
    $scope.menu  = [];

    MainService.cargarMenu().then( function( menu ) {
        $scope.menu = menu.data;
    });
    
    $scope.getCatalogos = function () {
        $mdBottomSheet.show({
            templateUrl: 'view/catalogo.html',
            controller: 'CatalogoCtrl',
            clickOutsideToClose: true
        });
    }
    
    $scope.getConsultas = function () {
        $mdBottomSheet.show({
            templateUrl: 'view/catalogo.html',
            controller: 'ConsultasCtrl',
            clickOutsideToClose: true
        });
    }
    
    $scope.getGraficas = function () {
        $mdBottomSheet.show({
            templateUrl: 'view/catalogo.html',
            controller: 'GraficasCtrl',
            clickOutsideToClose: true
        });
    }
    
    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };
    
    $scope.verLink = function(link) {
        $location.path(link);
    };
}]);
