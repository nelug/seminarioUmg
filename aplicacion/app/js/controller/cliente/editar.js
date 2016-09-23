'use strict';

angular.module('seminarioUmg').controller('EditarClienteCtrl', ['$scope', '$mdDialog','ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, ServiceGenerico, dataEnviada) {
    $scope.entidad = 'cliente';
    console.log($scope.entidad);
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'cliente');
    $scope.formTitulo = 'Edicion de cliente';
}]);
