'use strict';

angular.module('seminarioUmg').controller('GraficasCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.filtro = 3;
    $scope.verLink = function(link) {
        $location.path(link);
    };
}]);


