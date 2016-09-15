'use strict';

angular.module('seminarioUmg').controller('userTablaCtrl', ['$scope', '$timeout', 'ServiceGenerico',
function($scope, $timeout, ServiceGenerico) {
    $scope.query = { order: 'username', limit: 5, page: 1 };
    ServiceGenerico.buscarTodos($scope, 'User');
    ServiceGenerico.instanciarFunciones($scope, 'User');
}]);
