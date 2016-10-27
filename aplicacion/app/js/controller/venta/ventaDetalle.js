'use strict';

angular.module('seminarioUmg').controller('ventaDetalleCtrl', ['$scope', 'ServiceGenerico', 'data', '$mdDialog',
function($scope, ServiceGenerico, data, $mdDialog) {
    $scope.data = data;
    ServiceGenerico.buscarId($scope, 'detalle-venta');
    $scope.cancel = function() { $mdDialog.cancel(); };
}]);
