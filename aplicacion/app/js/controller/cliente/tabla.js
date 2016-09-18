'use strict';

angular.module('seminarioUmg').controller('clienteTablaCtrl', ['$scope', '$timeout', 'ServiceGenerico',
function($scope, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'Cliente');
    ServiceGenerico.instanciarFunciones($scope, 'Cliente');
}]);
