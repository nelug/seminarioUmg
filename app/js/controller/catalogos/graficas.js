'use strict';

angular.module('seminarioUmg').controller('GraficasCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.subMenu = [];
    $scope.filtro = 3;
    $http.get('/api/catalogo').success(function(data) {
        $scope.subMenu = data;
    });
}]);


