'use strict';

angular.module('seminarioUmg').controller('CrearProductoCtrl', ['$scope', '$http', '$mdDialog', 'ServiceGenerico',
function ($scope, $http, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog);
    $scope.formTitulo = 'Registro de producto';
    //ServiceGenerico.registrar($scope, 'producto');

$scope.registrarProducto = function() {
    $http.post('/api/producto/crear', $scope.add)
    .success(function(data) {
            $scope.add = {}; // Borramos los datos del formulario
            $scope.producto = data;
        })
    .error(function(data) {
        console.log('Error: ' + data);
    });
};

}]);
