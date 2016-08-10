'use strict';

angular.module('seminarioUmg').controller('CatalogoCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.subMenu = [];
    $scope.filtro = 1;
    $http.get('/api/catalogo').success(function(data) {
        $scope.subMenu = data;
    });
}]);


