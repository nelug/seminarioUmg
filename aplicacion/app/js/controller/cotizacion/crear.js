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

        if (ServiceGenericoDetalle.validarProductoDuplicado($scope)) {
            ServiceGenericoDetalle.mensajeAlerta('El producto que intenta ingresar ala cotizacion ya ha sido ingresado..');
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
            total:($scope.dataTemp.cantidad * $scope.producto.precio_venta),
            producto: $scope.producto.id
        };
            $scope.formData.detalle.push(dataForm);
            $scope.buscarTextoproducto = '';
            $scope.dataTemp = [];
    };
}]);
