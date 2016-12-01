'use strict';

angular.module('seminarioUmg').controller('EliminarProveedorCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'idEnviado',
function ($scope, $mdDialog, ServiceGenerico, idEnviado) {
    ServiceGenerico.funcionesDialogoEliminar($scope, $mdDialog, idEnviado, 'proveedor');
    $scope.formTitulo = 'Confirmacion de eliminacion de proveedor';
}]);
