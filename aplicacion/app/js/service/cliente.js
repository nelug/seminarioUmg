'use strict';

angular.module('seminarioUmg').factory('ClienteService', ['$q', '$timeout', '$http',
function ($q, $timeout, $http) {

    function crear($scope) {
        http.post('/api/cliente/', $scope.formData)
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

    function buscarTodos() {

    }

    function buscarId(id) {

    }

    return ({
        crear: crear,
        editar: editar,
        eliminar: eliminar,
        buscar: buscar
    });
}]);
