'use strict';

angular.module('seminarioUmg').factory('ServiceGenericoDetalle', [ '$http', '$timeout', '$q', '$log', '$route', 'toaster', 'jsonPath', '$location',
function ($http, $timeout, $q, $log, $route, toaster, jsonPath, $location) {
    
    function obtenerClientesAC($scope){
        $http.get('/api/v1/cliente/').success( function(data) {
            $scope.clientes = data;
            $scope.clientes.map( function (c) {
                c.value = c.nombre.toLowerCase() + ' ' + c.nit.toString() + ' ' + c.direccion.toLowerCase();
                return c;
            });
        });
        
        $scope.buscarAC = function (query) {
            var results = query ? $scope.clientes.filter( $scope.filtroAutoCliente(query) ) : $scope.clientes, deferred;
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 700, false);
            return deferred.promise;
        };
        
        $scope.seleccionarAC = function (dato) {
            $scope.formData.cliente = dato._id;
            $scope.cliente= dato;
        };
        
        $scope.filtroAutoCliente = function(query) {
            return function filterFn(item) {
                return (item.value.toLowerCase().indexOf(query.toLowerCase()) >= 0);
            };
        };
    }
    
    function obtenerProductosAC($scope){
        $http.get('/api/v1/producto/').success( function(data) {
            $scope.productos = data;
            $scope.productos.map( function (p) {
                p.value = p.codigo + ' ' + p.descripcion;
                return p;
            });
        });
        
        $scope.buscarACproducto = function (query) {
            var results = query ? $scope.productos.filter( $scope.filtroAutoProducto(query) ) : $scope.productos, deferredP;
            deferredP = $q.defer();
            $timeout(function () { deferredP.resolve( results ); }, Math.random() * 700, false);
            return deferredP.promise;
        };
        
        $scope.seleccionarACproducto = function (dato) {
            $scope.producto= dato;
        };
        
        $scope.filtroAutoProducto = function(query) {
            return function filterFn(item) {
                return (item.value.toLowerCase().indexOf(query.toLowerCase()) >= 0);
            };
        };
    }
    
    function funcionesCrear($scope, entidad) {
        $scope.crearRegistro = function () {
            $http.post('/api/v1/'+ entidad.toLowerCase() + '/crear', $scope.formData)
            .success(function(data) {
                if (!data.resultado) {
                    var mensaje = jsonPath(data, '$.mensaje[*].message');
                    toaster.warning('Advertencia.!', mensaje[mensaje.length - 1]);
                }
                else {
                    toaster.success('Correcto!', data.mensaje);
                    $scope.formData = {};
                    $location.path('/');
                    $route.reload();
                }
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };
    }
    
    
    return ({
        funcionesCrear: funcionesCrear,
        obtenerProductosAC: obtenerProductosAC,
        obtenerClientesAC: obtenerClientesAC
    });
}]);