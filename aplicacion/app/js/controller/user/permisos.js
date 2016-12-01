'use strict';

angular.module('seminarioUmg').controller('PermisosCtrl', ['$scope', '$mdDialog', 'ServiceGenerico', 'dataEnviada',
function ($scope, $mdDialog, ServiceGenerico, dataEnviada) {
    ServiceGenerico.funcionesDialogoEditar($scope, $mdDialog, dataEnviada, 'Permisos');
    ServiceGenerico.permisosUsuario($scope);
    $scope.formTitulo = 'Permisos de usuario';

    $scope.formPermiso = {
            principal: [],
            catalogos: [],
            consultas: [],
            graficas: []
    };


}]);
