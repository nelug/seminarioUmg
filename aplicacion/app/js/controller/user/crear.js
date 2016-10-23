'use strict';

angular.module('seminarioUmg').controller('CrearUserCtrl', ['$scope', '$location', 'AuthService', '$mdDialog', 'ServiceGenerico',
function ($scope, $location, AuthService, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog, 'user');
    $scope.formTitulo = 'Registro de usuario';
}]);
