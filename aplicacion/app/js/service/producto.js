'use strict';

angular.module('seminarioUmg').factory('ProductoService', ['$q', '$timeout', '$http',
function ($q, $timeout, $http) {
    
    function crear($scope) {
        http.post('/api/productos/', $scope.formData)
		.success(function(data) {
				
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
    }
    
    function editar(data) {

    }
    
    function eliminar(id) {

    }
    
    function buscarTodos($scope) {
        $http.get('/api/productos/all').success(function(data) {
            $scope.productos = data;
        });
    }
    
    function buscarId(id) {
        
    }

    return ({
        crear: crear,
        editar: editar,
        eliminar: eliminar,
        buscar: buscar,
        buscarTodos: buscarTodos
    });
}]);