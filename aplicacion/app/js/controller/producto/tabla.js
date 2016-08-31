'use strict';

angular.module('seminarioUmg').controller('proveedorTablaCtrl', ['$scope', '$http', '$timeout',
function($scope, $http, $timeout) {

   $scope.topDirections = ['left'];
   $scope.bottomDirections = ['right'];
   $scope.isOpen = false;
   $scope.availableModes = ['md-fling', 'md-scale'];
   $scope.selectedMode = 'md-fling';
   $scope.availableDirections = ['left', 'right'];
   $scope.selectedDirection = 'right';

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
}]);'use strict';

angular.module('seminarioUmg').controller('productoTablaCtrl', ['$scope', '$http', '$timeout',
function($scope, $http, $timeout) {

   $scope.topDirections = ['left'];
   $scope.bottomDirections = ['right'];
   $scope.isOpen = false;
   $scope.availableModes = ['md-fling', 'md-scale'];
   $scope.selectedMode = 'md-fling';
   $scope.availableDirections = ['left', 'right'];
   $scope.selectedDirection = 'right';

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
