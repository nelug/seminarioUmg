'use strict';

angular.module('seminarioUmg')
.controller('MainController', ['$scope', 'MainService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
function( $scope, MainService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    
    $scope.menu  = [ ];
    
    MainService.cargarMenu().then( function( menu ) {
        $scope.menu    = [].concat(menu);
    });
    
    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    }
}]);
