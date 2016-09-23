'use strict';

angular.module('seminarioUmg').controller('EliminarProductoCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'idEnviado',
function ($scope, $mdDialog, ServiceGenerico, idEnviado) {
    ServiceGenerico.funcionesDialogoEliminar($scope, $mdDialog, idEnviado, 'producto');
    $scope.formTitulo = 'Confirmacion de eliminacion de produto';
}]);
