'use strict';

angular.module('seminarioUmg').controller('EliminarClienteCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'idEnviado',
function ($scope, $mdDialog, ServiceGenerico, idEnviado) {
    ServiceGenerico.funcionesDialogoEliminar($scope, $mdDialog, idEnviado, 'cliente');
    $scope.formTitulo = 'Confirmacion de eliminacion de cliente';
}]);
