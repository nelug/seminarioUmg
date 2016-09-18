'use strict';

angular.module('seminarioUmg').controller('productoTablaCtrl', ['$scope', '$http', '$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    $scope.query = { order: 'descripcion', limit: 5, page: 1 };
    ServiceGenerico.buscarTodos($scope, 'Producto');
    ServiceGenerico.instanciarFunciones($scope, 'Producto');
}]);
