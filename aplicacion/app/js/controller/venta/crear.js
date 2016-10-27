'use strict';

angular.module('seminarioUmg').controller('CrearVentaCtrl', ['$scope', 'ServiceGenericoDetalle',
function($scope, ServiceGenericoDetalle) {
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
        if ($scope.dataTemp.cantidad > $scope.producto.existencia) {
            ServiceGenericoDetalle.mensajeAlerta('La cantidad no puede ser mayor ala existencia.');
            return false;
        }

        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precio_venta,
            ganancia:($scope.producto.precio_venta - $scope.producto.precio_costo),
            producto: $scope.producto.id,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_venta)
        };
        $scope.formData.detalle.push(dataForm);

        $scope.buscarTextoproducto = '';
        $scope.dataTemp = [];
    };
}]);
