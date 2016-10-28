'use strict';

angular.module('seminarioUmg').controller('descargaDetalleCtrl', ['$scope', 'ServiceGenerico', 'data', '$mdDialog',
function($scope, ServiceGenerico, data, $mdDialog) {
    $scope.data = data;
    $scope.formTitulo = 'Detalle De La Descarga';
    ServiceGenerico.buscarId($scope, 'detalle-descarga');
    $scope.cancel = function() { $mdDialog.cancel(); };
}]);
