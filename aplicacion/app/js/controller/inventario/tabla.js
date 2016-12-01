'use strict';

angular.module('seminarioUmg').controller('inventarioTablaCtrl', ['$scope', '$http', '$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'Inventario');
}]);
