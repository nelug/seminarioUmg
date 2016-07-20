'use strict';

angular.module('seminarioUmg')
.controller('MainController', ['$scope', 'MainService', '$mdSidenav','$rootScope','$location',
function( $scope, MainService, $mdSidenav, $rootScope, $location) {
    
    $scope.menu  = [];
    
    MainService.cargarMenu().then( function( menu ) {
        $scope.menu = [].concat(menu);
    });
    
    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };
    
    $scope.verLink = function(link) {
        $location.path(link);
    };
}]);
