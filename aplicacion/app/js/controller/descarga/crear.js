'use strict';

angular.module('seminarioUmg').controller('CrearDescargaCtrl', ['$scope', '$rootScope', 'ServiceGenericoDetalle',
function($scope, $rootScope, ServiceGenericoDetalle) {
    $scope.formTitulo = 'Crear Descarga De Inventario';

    $scope.detalleTabla = [];
    $scope.formData = {
        fecha: new Date(),
        nota: '',
        usuario: [],
        detalle: []
    };

    ServiceGenericoDetalle.obtenerClientesAC($scope);
    ServiceGenericoDetalle.obtenerProductosAC($scope);
    ServiceGenericoDetalle.funcionesCrear($scope, 'Descarga');

    $scope.agregarDataDetalle = function() {

        if (ServiceGenericoDetalle.validarProductoDuplicado($scope)) {
            ServiceGenericoDetalle.mensajeAlerta('El producto que intenta descargar ya ha sido ingresado..');
            return false;
        }

        if(parseInt($scope.dataTemp.cantidad) <= 0){
            ServiceGenericoDetalle.mensajeAlerta('La cantidad no puede ser menor o igual a cero');
            return false;
        }


        var dataForm = {
            descripcion: $scope.producto.descripcion,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_costo),
            cantidad: $scope.dataTemp.cantidad,
            precio: $scope.producto.precio_costo,
            producto: $scope.producto.id
        };

        $scope.formData.detalle.push(dataForm);
        $scope.buscarTextoproducto = '';
        $scope.dataTemp = [];

    };
}]);
