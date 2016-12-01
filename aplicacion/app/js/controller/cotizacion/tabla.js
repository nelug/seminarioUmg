'use strict';

angular.module('seminarioUmg').controller('consultarCotizacionCtrl', ['$scope', '$rootScope','$http','$timeout', 'ServiceGenerico',
function($scope, $rootScope, $http, $timeout, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'cotizacion');
    ServiceGenerico.instanciarFunciones($scope, 'cotizacion');
}]);
