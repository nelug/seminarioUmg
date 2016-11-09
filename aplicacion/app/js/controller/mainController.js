'use strict';

angular.module('seminarioUmg').controller('MainController',
['$scope', '$mdSidenav', '$mdMedia', '$rootScope', '$location', 'AuthService', '$localStorage',
function( $scope, $mdSidenav, $mdMedia, $rootScope, $location, AuthService, $localStorage) {

    $scope.showSubMenu = function(op) {
        if($scope.subMenu === op){
            $scope.subMenu = 0;
        }

        else {
            $scope.subMenu = op;
        }
    };

    $scope.verLink = function(link) {
        $scope.toggleMenu();
        $location.path(link);
    };

    $scope.bloquearMenu = function() {
        if ($rootScope.ocultarMenu === true) {
            return false;
        }
        return $mdMedia('gt-sm');
    };

    $scope.toggleMenu = function() {
        if (!$mdSidenav('menu').isLockedOpen()) {
            $mdSidenav('menu').toggle();
        }
    };

    $scope.logout = function () {
        AuthService.logout().then(function () {
            $location.path('/login');
        });
        $localStorage.token = '';
        $rootScope.loginAccess = false;
    };

    $scope.openMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };

    $scope.ocultarMenu = function() {
        if ($rootScope.ocultarMenu === true) {
            $rootScope.ocultarMenu = false;
        } else {
            $rootScope.ocultarMenu = true;
        }
    };
}]);
