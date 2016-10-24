'use strict';

angular.module('seminarioUmg').controller('CrearCompraCtrl', ['$scope', '$rootScope', 'ServiceGenericoDetalle',
function($scope, $rootScope, ServiceGenericoDetalle) {
    $scope.formTitulo = 'Crear Compra';

    $scope.detalleTabla = [];
    $scope.formData = {
        fecha: new Date(),
        proveedor: [],
        usuario: [],
        detalle: []
    };

    ServiceGenericoDetalle.obtenerProveedoresAC($scope);
    ServiceGenericoDetalle.obtenerProductosAC($scope);
    ServiceGenericoDetalle.funcionesCrear($scope, 'Compra');

    $scope.agregarDataDetalle = function() {
        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio:  $scope.dataTemp.precio,
            producto: $scope.producto.id,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_venta)
        };
        $scope.formData.detalle.push(dataForm);
    };
}]);
