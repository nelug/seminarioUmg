'use strict';

angular.module('seminarioUmg').controller('EditarClienteCtrl', ['$scope', '$mdDialog','ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, ServiceGenerico, dataEnviada) {
    $scope.entidad = 'cliente';
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'cliente');
    $scope.formTitulo = 'Edicion de cliente';
}]);
