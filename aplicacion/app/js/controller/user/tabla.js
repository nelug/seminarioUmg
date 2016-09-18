'use strict';

angular.module('seminarioUmg').controller('userTablaCtrl', ['$scope', '$timeout','$http','ServiceGenerico',
function($scope, $timeout, $http, ServiceGenerico) {
    ServiceGenerico.buscarTodos($scope, 'User');
    ServiceGenerico.instanciarFunciones($scope, 'User');
}]);
