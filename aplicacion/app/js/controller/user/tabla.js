'use strict';

angular.module('seminarioUmg').controller('userTablaCtrl', ['$scope', '$http', '$timeout', '$mdDialog',
function($scope, $http, $timeout, $mdDialog) {
    
    $scope.topDirections = ['left'];
    $scope.bottomDirections = ['right'];
    $scope.isOpen = false;
    $scope.availableModes = ['md-fling', 'md-scale'];
    $scope.selectedMode = 'md-fling';
    $scope.availableDirections = ['left', 'right'];
    $scope.selectedDirection = 'right';
    
    $scope.editEnable = false;
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
        $scope.selected = user;
        $scope.editEnable = true;
    }
    
    $scope.dialogCrearUsuario = function(ev) {
        $mdDialog.show({
            controller: 'CrearUserCtrl',
            templateUrl: 'view/user/crear.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
}]);
