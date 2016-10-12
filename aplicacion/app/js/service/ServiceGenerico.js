'use strict';

angular.module('seminarioUmg').factory('ServiceGenerico', ['$q', '$timeout', '$http', '$mdDialog', '$route', '$templateCache', 'toaster', 'jsonPath',
function ($q, $timeout, $http, $mdDialog, $route, $templateCache, toaster, jsonPath) {
    
    function buscarTodos($scope, entidad) {
        $scope.editEnable = false;
        $scope.dataSeleccionada = [];
        $scope.opFab = { abrir : false, modo : 'md-fling', direction : 'right'};
        
        $http.get('/api/v1/' + entidad.toLowerCase() + '/').success(function(data) {
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
                locals:{ dataEnviada: $scope.dataSeleccionada },
                controller: 'Editar' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/editar.html',
                clickOutsideToClose: false
            });
        };
        
        $scope.dialogoEliminar = function() {
            $mdDialog.show({
                locals:{ idEnviado: $scope.dataSeleccionada.id },
                controller: 'Eliminar' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/eliminar.html',
                clickOutsideToClose: false
            });
        };
        
        $scope.selectDataTabla = function(dataTabla) {
            $scope.dataSeleccionada = dataTabla;
            $scope.editEnable = true;
        };
    }
    
    function funcionesDefaultDialog($scope, $mdDialog, entidad) {
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
        
        $scope.crearRegistro = function () {
            $http.post('/api/v1/'+ entidad.toLowerCase() + '/', $scope.formData)
            .success(function(data) {
                toaster.success('Correcto!', data.mensaje);
                $scope.formData = {};
                $mdDialog.hide();
                $templateCache.remove($route.current.templateUrl);
                $route.reload();
            })
            .error(function(data) {
                toaster.warning('Advertencia.!', jsonPath(data, '$.[0]')[0]);
            });
        };
    }
    
    function funcionesDialogoEditar($scope, $mdDialog, dataEnviada, entidad){
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
        $scope.formData = angular.copy(dataEnviada);
        
        // Función para editar un registro
        $scope.actualizar = function() {
            $http.put('/api/v1/'+ entidad.toLowerCase() + '/', $scope.formData)
            .success(function(data) {
                toaster.success('Correcto!', data.mensaje);
                $scope.formData = {};
                $mdDialog.hide();
                $templateCache.remove($route.current.templateUrl);
                $route.reload();
            })
            .error(function(data) {
                toaster.warning('Advertencia.!', jsonPath(data, '$.[0]')[0]);
            });
        };
        
    }
    
    function funcionesDialogoEliminar($scope, $mdDialog, idEnviado, entidad){
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
        $scope.id = idEnviado;
        
        // Función para editar un registro
        $scope.eliminar = function() {
            $http.delete('/api/v1/' + entidad.toLowerCase() + '/'+$scope.id)
            .success(function(data) {
                toaster.success('Correcto!', data.mensaje);
                $scope.formData = {};
                $mdDialog.hide();
                $templateCache.remove($route.current.templateUrl);
                $route.reload();
            })
            .error(function(data) {
                toaster.warning('Advertencia.!', data);
            });
        };
        
    }
    
    return ({
        buscarTodos: buscarTodos,
        instanciarFunciones: instanciarFunciones,
        funcionesDefaultDialog: funcionesDefaultDialog,
        funcionesDialogoEditar: funcionesDialogoEditar,
        funcionesDialogoEliminar: funcionesDialogoEliminar
    });
}]);
