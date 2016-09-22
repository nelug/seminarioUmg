'use strict';

angular.module('seminarioUmg').controller('EditarClienteCtrl', ['$scope', '$mdDialog','$http', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, $http, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'cliente');
    $scope.formTitulo = 'Edicion de cliente';
}]);
