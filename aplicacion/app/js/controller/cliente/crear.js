'use strict';

angular.module('seminarioUmg').controller('CrearClienteCtrl', ['$scope', '$http', '$mdDialog', 'ServiceGenerico',
function ($scope, $http, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog, 'cliente');
    $scope.formTitulo = 'Registro de Cliente';
}]);
