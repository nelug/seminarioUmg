'use strict';

angular.module('seminarioUmg').controller('CrearCompraCtrl', ['$scope', '$rootScope', 'ServiceGenericoDetalle',
function($scope, $rootScope, ServiceGenericoDetalle) {
    $scope.formTitulo = 'Crear Compra';

    $scope.detalleTabla = [];
    $scope.formData = {
        fecha_documento: '',
        numero_documento: '',
        proveedor: [],
        usuario: [],
        detalle: []
    };

    ServiceGenericoDetalle.obtenerProveedoresAC($scope);
    ServiceGenericoDetalle.obtenerProductosAC($scope);
    ServiceGenericoDetalle.funcionesCrear($scope, 'Compra');

    $scope.agregarDataDetalle = function() {

        if (ServiceGenericoDetalle.validarProductoDuplicado($scope)) {
            ServiceGenericoDetalle.mensajeAlerta('El producto que intenta comprar ya ha sido ingresado..');
            return false;
        }
        if(parseInt($scope.dataTemp.cantidad) <= 0){
            ServiceGenericoDetalle.mensajeAlerta('La cantidad no puede ser menor o igual a 0');
            return false;
        }
        if(parseInt($scope.dataTemp.precio) <= 0){
            ServiceGenericoDetalle.mensajeAlerta('El precio no puede ser menor o igual a 0');
            return false;
        }


        var dataForm = {
            cantidad: $scope.dataTemp.cantidad,
            descripcion: $scope.producto.descripcion,
            precio:  $scope.dataTemp.precio,
            producto: $scope.producto.id,
            total:($scope.dataTemp.cantidad * $scope.dataTemp.precio)
        };
        $scope.formData.detalle.push(dataForm);
        $scope.buscarTextoproducto = '';
        $scope.dataTemp = [];
    };
}]);
