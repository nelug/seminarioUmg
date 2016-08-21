'use strict';

angular.module('seminarioUmg').controller('ConsultasCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.filtro = 2;
    $scope.verLink = function(link) {
        $location.path(link);
    };
}]);


