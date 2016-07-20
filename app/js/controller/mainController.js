'use strict';

angular.module('seminarioUmg')
.controller('MainController', ['$scope', 'MainService', '$mdSidenav',
function( $scope, MainService, $mdSidenav ) {
    
    $scope.menu  = [];
    
    MainService.cargarMenu().then( function( menu ) {
        $scope.menu = [].concat(menu);
    });
    
    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };
}]);
