'use strict';

angular.module('seminarioUmg').controller('consultarVentasCtrl', ['$scope','$http','$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'venta');
    ServiceGenerico.instanciarFunciones($scope, 'venta');
}]);
