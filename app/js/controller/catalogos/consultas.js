'use strict';

angular.module('seminarioUmg').controller('ConsultasCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.subMenu = [];
    $scope.filtro = 2;
    $http.get('/api/catalogo').success(function(data) {
        $scope.subMenu = data;
    });
}]);


