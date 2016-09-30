'use strict';

angular.module('seminarioUmg').controller('EliminarUserCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'idEnviado',
function ($scope, $mdDialog, ServiceGenerico, idEnviado) {
    ServiceGenerico.funcionesDialogoEliminar($scope, $mdDialog, idEnviado, 'user');
    $scope.formTitulo = 'Confirmacion de eliminacion de usuario';
}]);
