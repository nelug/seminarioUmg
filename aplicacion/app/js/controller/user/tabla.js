
'use strict';

angular.module('seminarioUmg').controller('userTablaCtrl', ['$scope', '$http', '$timeout', 
function($scope, $http, $timeout) {
   
   $scope.selected = [];
   $scope.limitOptions = [5, 10, 15];
   
   $scope.query = {
      order: 'username',
      limit: 5,
      page: 1
   };
   
   $http.get('/api/user/all').success(function(data) {
      $scope.usuarios = data;
   });
   
   $scope.selectUsuario = function(user) {
      console.log(user);
   }
}]);
