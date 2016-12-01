'use strict';

angular.module('seminarioUmg').controller('proveedorTablaCtrl', ['$scope','$http','$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'Proveedor');
    ServiceGenerico.instanciarFunciones($scope, 'Proveedor');  
}]);
