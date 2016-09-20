'use strict';

angular.module('seminarioUmg').controller('CrearProveedorCtrl', ['$scope', '$http','$mdDialog', 'ServiceGenerico',
function ($scope, $http, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog, 'proveedor');
    $scope.formTitulo = 'Registro de proveedor';
}]);
