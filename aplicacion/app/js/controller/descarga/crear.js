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
        var dataForm = {
            nota: $scope.nota,
            descripcion: $scope.producto.descripcion,
            precio: $scope.producto.precio_costo,
            total:($scope.dataTemp.cantidad * $scope.producto.precio_costo),
            cantidad: $scope.dataTemp.cantidad,
            precio: $scope.producto.precio_costo,
            producto: $scope.producto.id
        }

        $scope.formData.detalle.push(dataForm);
    };
}]);
