'use strict';

angular.module('seminarioUmg').controller('CrearVentaCtrl', ['$scope', '$rootScope', 'ServiceGenericoDetalle',
function($scope, $rootScope, ServiceGenericoDetalle) {
    $scope.formTitulo = 'Crear Venta';

    $scope.detalleTabla = [];
    $scope.formData = {
        fecha: new Date(),
        cliente: [],
        usuario: [],
        detalle: []
    };

    ServiceGenericoDetalle.obtenerClientesAC($scope);
    ServiceGenericoDetalle.obtenerProductosAC($scope);
    ServiceGenericoDetalle.funcionesCrear($scope, 'Venta');

    $scope.agregarDataDetalle = function() {
        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precio_venta,
            ganancia:($scope.producto.precio_venta - $scope.producto.precio_costo),
            producto: $scope.producto.id,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_venta)
        };
        $scope.formData.detalle.push(dataForm);
    };
}]);
