'use strict';

angular.module('seminarioUmg').controller('userTablaCtrl', ['$scope', '$http', '$timeout', '$mdDialog', 'AuthService',
function($scope, $http, $timeout, $mdDialog, AuthService) {
    
    $scope.opFab = { abrir : false, modo : 'md-fling', direction : 'right'};
    
    $scope.editEnable = false;
    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];
    
    $scope.query = {
        order: 'username',
        limit: 5,
        page: 1
    };
    
    AuthService.buscarTodos($scope);
        
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
