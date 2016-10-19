'use strict';

angular.module('seminarioUmg').controller('CrearCotizacionCtrl', ['$scope', '$rootScope', 'ServiceGenericoDetalle',
function($scope, $rootScope, ServiceGenericoDetalle) {
    $scope.formTitulo = 'Crear Cotizacion';

    $scope.detalleTabla = [];
    $scope.formData = {
        fecha: new Date(),
        cliente: [],
        usuario: [],
        detalle: []
    };

    ServiceGenericoDetalle.obtenerClientesAC($scope);
    ServiceGenericoDetalle.obtenerProductosAC($scope);
    ServiceGenericoDetalle.funcionesCrear($scope, 'Cotizacion');

    $scope.agregarDataDetalle = function() {
        var dataTabla = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precio_venta,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_venta)
        };

        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            precio: $scope.producto.precio_venta,
            producto: $scope.producto.id
        };

        $scope.detalleTabla.push(dataTabla);
        $scope.formData.detalle.push(dataForm);
    };
}]);
