'use strict';

angular.module('seminarioUmg').controller('productoTablaCtrl', ['$scope', '$http', '$timeout', 'ServiceGenerico',
function($scope, $http, $timeout, ServiceGenerico) {
    $scope.editEnable = false;
    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];
    
    $scope.query = {
        order: 'descripcion',
        limit: 5,
        page: 1
    };
    
    ServiceGenerico.buscarTodos($scope, 'productos');;
}]);
