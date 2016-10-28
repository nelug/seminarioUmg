'use strict';

angular.module('seminarioUmg').controller('compraDetalleCtrl', ['$scope', 'ServiceGenerico', 'data', '$mdDialog',
function($scope, ServiceGenerico, data, $mdDialog) {
    $scope.data = data;
    $scope.formTitulo = 'Detalle De La Compra';
    ServiceGenerico.buscarId($scope, 'detalle-compra');
    $scope.cancel = function() { $mdDialog.cancel(); };
}]);
