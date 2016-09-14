'use strict';

angular.module('seminarioUmg').controller('CrearUserCtrl', ['$scope', '$location', 'AuthService', '$mdDialog',
function ($scope, $location, AuthService, $mdDialog) {
    $scope.hide = function() { $mdDialog.hide(); };
    $scope.cancel = function() { $mdDialog.cancel(); };
    $scope.answer = function(answer) { $mdDialog.hide(answer); };
    
    $scope.register = function () {
        $scope.error = false;
        $scope.disabled = true;
        
        AuthService.register($scope.registerForm)
        .then(function () {
            $scope.hide();
            $scope.disabled = false;
            $scope.registerForm = {};
        })
        .catch(function () {
            $scope.error = true;
            $scope.errorMessage = 'hubo un error al intentar almacenar..!!';
            $scope.disabled = false;
            $scope.registerForm = {};
        });
    };
}]);