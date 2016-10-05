'use strict';

angular.module('seminarioUmg').factory('ServiceGenerico', ['$q', '$timeout', '$http', '$mdDialog', '$route', '$templateCache', 'toaster', 'jsonPath',
function ($q, $timeout, $http, $mdDialog, $route, $templateCache, toaster, jsonPath) {

    function buscarTodos($scope, entidad) {
        $scope.editEnable = false;
        $scope.dataSeleccionada = [];
        $scope.opFab = { abrir : false, modo : 'md-fling', direction : 'right'};

        $http.get('/api/v2/' + entidad.toLowerCase() + '/').success(function(data) {
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
                locals:{ idEnviado: $scope.dataSeleccionada._id },
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
            $http.post('/api/v2/'+ entidad.toLowerCase() + '/', $scope.formData)
            .success(function(data) {
                if (!data.success) {
                    toaster.warning('Advertencia.!', data);
                }
                else {
                    toaster.success('Correcto!', data.mensaje);
                    $scope.formData = {};
                    $mdDialog.hide();
                    $templateCache.remove($route.current.templateUrl);
                    $route.reload();
                }
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };
    }

    function funcionesDialogoEditar($scope, $mdDialog, dataEnviada, entidad){
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
        $scope.formData = dataEnviada;

        // Función para editar un registro
    	$scope.actualizar = function() {
    		$http.put('/api/v2/'+ entidad.toLowerCase() + '/', $scope.formData)
    		.success(function(data) {
                if (!data.success) {
                    toaster.warning('Advertencia.!', data);
                }
                else {
                    toaster.success('Correcto!', data.mensaje);
                    $scope.formData = {};
                    $mdDialog.hide();
                    $templateCache.remove($route.current.templateUrl);
                    $route.reload();
                }
    			})
    		.error(function(data) {
    			console.log('Error: ' + data);
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
    		$http.delete('/api/v2/' + entidad.toLowerCase() + '/'+$scope.id)
    		.success(function(data) {
                if (!data.success) {
                    toaster.warning(data.mensaje.name, data);
                }
                else {
                    toaster.success('Correcto!', data.mensaje);
                    $scope.formData = {};
                    $mdDialog.hide();
                    $templateCache.remove($route.current.templateUrl);
                    $route.reload();
                }
    			})
    		.error(function(data) {
    			console.log('Error: ' + data);
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
