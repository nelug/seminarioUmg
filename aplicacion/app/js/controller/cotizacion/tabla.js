'use strict';

angular.module('seminarioUmg').controller('consultarCotizacionCtrl', ['$scope','$http','$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'cotizacion');
    ServiceGenerico.instanciarFunciones($scope, 'cotizacion');
}]);
