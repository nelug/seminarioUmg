'use strict';

angular.module('seminarioUmg').controller('consultarVentasCtrl', ['$scope', 'ServiceGenerico',
function($scope, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'venta');
    ServiceGenerico.instanciarFunciones($scope, 'venta');
}]);
