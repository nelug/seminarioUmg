'use strict';

angular.module('seminarioUmg').controller('CrearCotizacionCtrl', ['$scope', '$http', '$timeout', '$q', '$log',
function($scope, $http, $timeout, $q, $log) {
    $scope.formTitulo = 'Crear Cotizacion';

    $scope.clientes = [];
    $scope.productos = [];

    $scope.cliente = [];
    $scope.detalleTabla = [];
    $scope.formData = {
        fecha: new Date(),
        cliente: [],
        usuario: [],
        detalle: []
    };

    $http.get('/api/cliente/all').success( function(data) {
        $scope.clientes = data;
        $scope.clientes.map( function (c) {
            c.value = c.nombre.toLowerCase() + ' ' + c.nit.toString() + ' ' + c.direccion.toLowerCase();
            return c;
        });
    });

    $http.get('/api/producto/all').success( function(data) {
        $scope.productos = data;
        $scope.productos.map( function (p) {
            p.value = p.codigo + ' ' + p.descripcion;
            return p;
        });
    });

    $scope.buscarAC = function (query) {
        var results = query ? $scope.clientes.filter( filtroAuto(query) ) : $scope.clientes, deferred;
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 700, false);
        return deferred.promise;
    }

    $scope.buscarACproducto = function (query) {
        var results = query ? $scope.productos.filter( filtroAuto(query) ) : $scope.productos, deferredP;
        deferredP = $q.defer();
        $timeout(function () { deferredP.resolve( results ); }, Math.random() * 700, false);
        return deferredP.promise;
    }

    $scope.seleccionarAC = function (dato) {
        $scope.formData.cliente = { id: dato._id };
        $scope.cliente= dato;
    }

    $scope.seleccionarACproducto = function (dato) {
        $scope.producto= dato;
    }

    function filtroAuto(query) {
        return function filterFn(item) {
            return (item.value.toLowerCase().indexOf(query.toLowerCase()) >= 0);
        };
    }

    $scope.agregarDataDetalle = function() {
        var dataTabla = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precioVenta,
            total:($scope.dataTemp.cantidad * $scope.producto.precioVenta)
        };

        var dataForm = {

        };
        console.log(dataTabla);
        $scope.detalleTabla.push(dataTabla);
        $scope.formData.detalle.push(dataForm);
        console.log($scope.detalleTabla);
    }
}]);
