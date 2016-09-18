'use strict';

angular.module('seminarioUmg').controller('EditarUsuarioCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada);
    $scope.formTitulo = 'Edicion de usuario';
}]);
