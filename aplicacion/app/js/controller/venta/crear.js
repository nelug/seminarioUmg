'use strict';

angular.module('seminarioUmg').controller('CrearVentaCtrl', ['$scope', 'ServiceGenericoDetalle', '$mdDialog',
function($scope, ServiceGenericoDetalle, $mdDialog) {


    $scope.formTitulo = 'Crear Venta';

    $scope.detalleTabla = [];
    $scope.formData = {
        fecha: new Date(),
        cliente: [],
        usuario: [],
        detalle: []
    };


    ServiceGenericoDetalle.dialogCliente($scope,'Cliente');
    ServiceGenericoDetalle.crearNuevoCliente($scope, $mdDialog,'cliente');
    ServiceGenericoDetalle.obtenerClientesAC($scope);
    ServiceGenericoDetalle.obtenerProductosAC($scope);
    ServiceGenericoDetalle.funcionesCrear($scope, 'Venta');

    $scope.agregarDataDetalle = function() {

        if (ServiceGenericoDetalle.validarProductoDuplicado($scope)) {
            ServiceGenericoDetalle.mensajeAlerta('El producto que intenta vender ya ha sido ingresado..');
            return false;
        }

        if (parseInt($scope.dataTemp.cantidad) > parseInt($scope.producto.existencia)) {
            ServiceGenericoDetalle.mensajeAlerta('La cantidad no puede ser mayor ala existencia.');
            return false;
        }
        if(parseInt($scope.dataTemp.cantidad) <= 0){
            ServiceGenericoDetalle.mensajeAlerta('La cantidad no puede ser menor o igual a cero.');
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
