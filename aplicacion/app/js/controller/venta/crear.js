'use strict';

angular.module('seminarioUmg').controller('CrearVentaCtrl', ['$scope', 'toaster', function($scope, toaster) {
    $scope.formTitulo = 'Crear Venta';
    
    $scope.notificaion = function() {
        toaster.pop('success', "Correcto", 'Venta almacenada con exito..');
    }
}]);
