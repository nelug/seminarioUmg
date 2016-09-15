'use strict';

angular.module('seminarioUmg').controller('CrearUserCtrl', ['$scope', '$location', 'AuthService', '$mdDialog', 'ServiceGenerico',
function ($scope, $location, AuthService, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog);
    $scope.formTitulo = 'Registro de usuario';
    
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