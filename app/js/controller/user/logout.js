'use strict';

angular.module('seminarioUmg').controller('logoutController', ['$scope', '$location', 'AuthService', '$rootScope',
function ($scope, $location, AuthService, $rootScope) {
    
    $scope.logout = function () {
        AuthService.logout().then(function () {
            $location.path('/login');
        });
        
        $rootScope.loginAccess = false;
    };
}]);