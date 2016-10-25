'use strict';

angular.module('seminarioUmg').controller('existenciaTablaCtrl', ['$scope', '$http', '$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'Existencia');
}]);
