'use strict';

angular.module('seminarioUmg', ['ngRoute', 'ngResource', 'ngMessages', 'ngAnimate']).run('$scope', '$http', function($scope, $http) {
  $http.get('/api/persona').success(function(data) {
      $scope.personas = data;
  })
}]);
