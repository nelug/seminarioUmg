'use strict';

angular.module('seminarioUmg').controller('cotizacionDetalleCtrl', ['$scope', 'ServiceGenerico', 'data', '$mdDialog',
function($scope, ServiceGenerico, data, $mdDialog) {
    $scope.data = data;
    $scope.formTitulo = 'Detalle De La Cotizacion';
    ServiceGenerico.buscarId($scope, 'detalle-cotizacion');
    $scope.cancel = function() { $mdDialog.cancel(); };
}]);
