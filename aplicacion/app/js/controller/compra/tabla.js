'use strict';

angular.module('seminarioUmg').controller('consultarCompraCtrl', ['$scope','$http','$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'compra');
    ServiceGenerico.instanciarFunciones($scope, 'compra');
}]);
