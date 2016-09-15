'use strict';

angular.module('seminarioUmg').factory('ServiceGenerico', ['$q', '$timeout', '$http', '$mdDialog',
function ($q, $timeout, $http, $mdDialog) {
    
    function buscarTodos($scope, entidad) {
        $scope.editEnable = false;
        $scope.selected = [];
        $scope.limitOptions = [5, 10, 15];
        
        $http.get('/api/' + entidad.toLowerCase() + '/all').success(function(data) {
            $scope.dataTabla = data;
        });
    }
    
    function instanciarFunciones($scope, entidad) {
        $scope.dialogoCrear = function() {
            $mdDialog.show({
                controller: 'Crear' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/crear.html',
                clickOutsideToClose: false
            });
        };
        
        $scope.dialogoEditar = function() {
            $mdDialog.show({
                controller: 'Editar' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/editar.html',
                clickOutsideToClose: false
            });
        };
        
        $scope.dialogoEliminar = function() {
            $mdDialog.show({
                controller: 'Eliminar' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/eliminar.html',
                clickOutsideToClose: false
            });
        };
        
        $scope.selectDataTabla = function(dataTabla) {
            $scope.selected = dataTabla;
            $scope.editEnable = true;
        }
    }
    
    function buscar(id) {
        
    }
    
    return ({
        buscar: buscar,
        buscarTodos: buscarTodos,
        instanciarFunciones: instanciarFunciones
    });
}]);