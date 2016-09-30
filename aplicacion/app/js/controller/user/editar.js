'use strict';

angular.module('seminarioUmg').controller('EditarUserCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'user');
    $scope.formTitulo = 'Edicion de usuario';
}]);
