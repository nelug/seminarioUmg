'use strict';

angular.module('seminarioUmg').factory('ServiceGenerico', ['$q', '$timeout', '$http',
function ($q, $timeout, $http) {
    
    function buscarTodos($scope, entidad) {
        $http.get('/api/'+entidad+'/all').success(function(data) {
            $scope.dataTabla = data;
        });
    }
    
    function buscar(id) {
        
    }

    return ({
        buscar: buscar,
        buscarTodos: buscarTodos
    });
}]);