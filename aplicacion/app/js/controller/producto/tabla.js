'use strict';

angular.module('seminarioUmg').controller('productoTablaCtrl', ['$scope', '$http', '$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'Producto');
    ServiceGenerico.instanciarFunciones($scope, 'Producto');
}]);
