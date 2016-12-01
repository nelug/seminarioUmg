'use strict';

angular.module('seminarioUmg').controller('CrearProductoCtrl', ['$scope', '$http', '$mdDialog', 'ServiceGenerico',
function ($scope, $http, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog, 'Producto');
    $scope.formTitulo = 'Registro de producto';
}]);
