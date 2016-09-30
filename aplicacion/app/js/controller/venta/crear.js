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
        var dataTabla = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precioVenta,
            total:($scope.dataTemp.cantidad * $scope.producto.precioVenta)
        };
        
        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            precio: $scope.producto.precioVenta,
            ganancia:($scope.producto.precioVenta - $scope.producto.precioCosto),
            producto: $scope.producto._id
        };
        
        $scope.detalleTabla.push(dataTabla);
        $scope.formData.detalle.push(dataForm);
    }    
}]);
