'use strict';

angular.module('seminarioUmg').controller('proveedorTablaCtrl', ['$scope', '$timeout', 'ServiceGenerico',
function($scope, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'Proveedor');
    ServiceGenerico.instanciarFunciones($scope, 'Proveedor');
}]);
