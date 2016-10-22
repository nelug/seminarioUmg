'use strict';

angular.module('seminarioUmg').controller('MainController',
['$scope', '$mdSidenav', '$rootScope', '$location', 'AuthService', '$localStorage',
function( $scope, $mdSidenav, $rootScope, $location, AuthService, $localStorage) {

    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };

    $scope.verLink = function(link) {
        $location.path(link);
    };

    $scope.showSubMenu = function(op) {
        if($scope.subMenu === op){
            $scope.subMenu = 0;
        }

        else {
            $scope.subMenu = op;
        }
    };

    $scope.logout = function () {
        AuthService.logout().then(function () {
            $location.path('/login');
        });
        $localStorage.token = '';
        $rootScope.loginAccess = false;
    };
}]);
