'use strict';

angular.module('seminarioUmg').controller('GraficasCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    
    $scope.subMenu = [];
    $scope.filtro = 3;
    $http.get('/api/catalogo').success(function(data) {
        $scope.subMenu = data;
    });
}]);


