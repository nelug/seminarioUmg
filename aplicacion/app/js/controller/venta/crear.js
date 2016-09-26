'use strict';

angular.module('seminarioUmg').controller('CrearVentaCtrl', ['$scope', '$http', '$timeout', '$q', '$log', 
function($scope, $http, $timeout, $q, $log) {
    $scope.formTitulo = 'Crear Venta';

    $scope.datos = [];
    $scope.cliente = [];
    $scope.formData = {
        cliente: []
    };
    
    $http.get('/api/cliente/all').success( function(data) {
        $scope.datos = data;
        $scope.datos.map( function (c) {
            c.value = c.nombre.toLowerCase() + ' ' + c.nit.toString() + ' ' + c.direccion.toLowerCase();
            return c;
        });
    });
    
    $scope.buscarAC = function (query) {
        var results = query ? $scope.datos.filter( filtroAuto(query) ) : $scope.datos, deferred;
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 700, false);
        return deferred.promise;
    }
    
    $scope.seleccionarAC = function (dato) {
        $scope.formData['cliente'] = { id: dato._id };
        $scope.cliente = dato;
    }
    
    function filtroAuto(query) {
        return function filterFn(item) {
            return (item.value.toLowerCase().indexOf(query.toLowerCase()) >= 0);
        };
    }
}]);
