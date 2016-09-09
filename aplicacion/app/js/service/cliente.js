'use strict';

angular.module('seminarioUmg').factory('ClienteService', ['$q', '$timeout', '$http',
function ($q, $timeout, $http) {
    
    function crear(data) {
    
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