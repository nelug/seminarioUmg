'use strict';

angular.module('seminarioUmg').controller('CatalogoCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.filtro = 1;
    $scope.verLink = function(link) {
        $location.path(link);
    };
}]);


