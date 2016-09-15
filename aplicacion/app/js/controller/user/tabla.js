'use strict';

angular.module('seminarioUmg').controller('userTablaCtrl', ['$scope', '$http', '$timeout', '$mdDialog', 'ServiceGenerico',
function($scope, $http, $timeout, $mdDialog, ServiceGenerico) {
    
    $scope.editEnable = false;
    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];
    
    $scope.query = {
        order: 'username',
        limit: 5,
        page: 1
    };
    
    ServiceGenerico.buscarTodos($scope, 'user');
        
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
