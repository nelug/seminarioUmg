'use strict';

angular.module('seminarioUmg').controller('CrearDescargaCtrl', ['$scope', '$rootScope', 'ServiceGenericoDetalle',
function($scope, $rootScope, ServiceGenericoDetalle) {
    $scope.formTitulo = 'Crear Descarga De Inventario';

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
        var dataTabla = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precio_venta,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_venta)
        };

        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            precio: $scope.producto.precio_venta,
            ganancia:($scope.producto.precio_venta - $scope.producto.precio_costo),
            producto: $scope.producto.id
        };

        $scope.detalleTabla.push(dataTabla);
        $scope.formData.detalle.push(dataForm);
    };
}]);
