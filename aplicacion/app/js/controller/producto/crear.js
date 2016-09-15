'use strict';

angular.module('seminarioUmg').controller('CrearProductoCtrl', ['$scope', '$mdDialog', 'ServiceGenerico',
function ($scope, $mdDialog, ServiceGenerico) {
    ServiceGenerico.funcionesDefaultDialog($scope, $mdDialog);
    $scope.formTitulo = 'Registro de producto';
}]);