'use strict';

angular.module('seminarioUmg').controller('EditarProveedorCtrl', ['$scope', '$mdDialog','$http', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, $http, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'proveedor');
    $scope.formTitulo = 'Edicion de Proveedor';
}]);
