'use strict';

angular.module('seminarioUmg').controller('CatalogoCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    
    $scope.subMenu = [];
    $scope.filtro = 1;
    $http.get('/api/catalogo').success(function(data) {
        $scope.subMenu = data;
    });
}]);


