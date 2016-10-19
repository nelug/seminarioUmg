'use strict';

angular.module('seminarioUmg').controller('consultarDescargaCtrl', ['$scope','$http','$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'descarga');
    ServiceGenerico.instanciarFunciones($scope, 'descarga');
}]);
