'use strict';

angular.module('seminarioUmg').controller('CrearUserCtrl', ['$scope', '$location', 'AuthService', '$mdDialog',
  function ($scope, $location, AuthService, $mdDialog) {
    $scope.hide = function() { $mdDialog.hide(); };

    $scope.cancel = function() { $mdDialog.cancel(); };

    $scope.answer = function(answer) { $mdDialog.hide(answer); };
}]);