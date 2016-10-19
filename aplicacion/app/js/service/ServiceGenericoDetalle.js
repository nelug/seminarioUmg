'use strict';

angular.module('seminarioUmg').factory('ServiceGenericoDetalle', [ '$http', '$timeout', '$q', '$log', '$route', 'toaster', 'jsonPath', '$location', '$localStorage',
function ($http, $timeout, $q, $log, $route, toaster, jsonPath, $location, $localStorage) {

    function obtenerClientesAC($scope){
        $http.get('/api/v1/cliente?token='+$localStorage.token).success( function(data) {
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
            $scope.formData.cliente = dato.id;
            $scope.cliente= dato;
        };

        $scope.filtroAutoCliente = function(query) {
            return function filterFn(item) {
                return (item.value.toLowerCase().indexOf(query.toLowerCase()) >= 0);
            };
        };
    }

    function obtenerProductosAC($scope){
        $http.get('/api/v1/producto?token='+$localStorage.token).success( function(data) {
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
            $scope.formData.token = $localStorage.token;
            $http.post('/api/v1/'+ entidad.toLowerCase() + '/', $scope.formData)
            .success(function(data) {
                /*toaster.success('Correcto!', data.mensaje);
                $scope.formData = {};
                $location.path('/');
                $route.reload();*/
            })
            .error(function(data) {
                toaster.warning('Advertencia.!', data);
            });
        };
    }


    return ({
        funcionesCrear: funcionesCrear,
        obtenerProductosAC: obtenerProductosAC,
        obtenerClientesAC: obtenerClientesAC
    });
}]);
