'use strict';

angular.module('seminarioUmg').controller('EditarProductoCtrl', ['$scope', '$mdDialog','$http', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, $http, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'producto');
    $scope.formTitulo = 'Edicion de Producto';
}]);
