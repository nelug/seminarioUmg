'use strict';

angular.module('seminarioUmg').controller('EditarClienteCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada);
    $scope.formTitulo = 'Edicion de cliente';
}]);
