'use strict';

angular.module('seminarioUmg').factory('ServiceGenerico', ['$q', '$timeout', '$http', '$mdDialog',
function ($q, $timeout, $http, $mdDialog) {

    function buscarTodos($scope, entidad) {
        $scope.editEnable = false;
        $scope.dataSeleccionada = [];
        $scope.opFab = { abrir : false, modo : 'md-fling', direction : 'right'};

        $http.get('/api/' + entidad.toLowerCase() + '/all').success(function(data) {
            $scope.dataTabla = data;
        });
    }

    function instanciarFunciones($scope, entidad) {
        $scope.dialogoCrear = function() {
            $mdDialog.show({
                controller: 'Crear' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/crear.html',
                clickOutsideToClose: false
            });
        };

        $scope.dialogoEditar = function() {
            $mdDialog.show({
                locals:{ dataEnviada: $scope.dataSeleccionada },
                controller: 'Editar' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/editar.html',
                clickOutsideToClose: false
            });
        };

        $scope.dialogoEliminar = function() {
            $mdDialog.show({
                locals:{ idEnviado: $scope.dataSeleccionada._id },
                controller: 'Eliminar' + entidad + 'Ctrl',
                templateUrl: 'view/' + entidad.toLowerCase() + '/eliminar.html',
                clickOutsideToClose: false
            });
        };

        $scope.selectDataTabla = function(dataTabla) {
            $scope.dataSeleccionada = dataTabla;
            $scope.editEnable = true;
        };
    }

    function funcionesDefaultDialog($scope, $mdDialog) {
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
    }

    function funcionesDialogoEditar($scope, $mdDialog, dataEnviada){
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
        $scope.datosForm = dataEnviada;
    }

    function funcionesDialogoEliminar($scope, $mdDialog, idEnviado){
        $scope.hide = function() { $mdDialog.hide(); };
        $scope.cancel = function() { $mdDialog.cancel(); };
        $scope.answer = function(answer) { $mdDialog.hide(answer); };
        $scope.id = idEnviado;
    }

    return ({
        buscarTodos: buscarTodos,
        instanciarFunciones: instanciarFunciones,
        funcionesDefaultDialog: funcionesDefaultDialog,
        funcionesDialogoEditar: funcionesDialogoEditar,
        funcionesDialogoEliminar: funcionesDialogoEliminar
    });
}]);






angular.module('myModule', ['datatables']).controller('MyCtrl', MyCtrl);
function MyCtrl(DTOptionsBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
        .withLanguage({
            "sEmptyTable":     "No data available in table",
            "sInfo":           "Showing _START_ to _END_ of _TOTAL_ entries",
            "sInfoEmpty":      "Showing 0 to 0 of 0 entries",
            "sInfoFiltered":   "(filtered from _MAX_ total entries)",
            "sInfoPostFix":    "",
            "sInfoThousands":  ",",
            "sLengthMenu":     "Show _MENU_ entries",
            "sLoadingRecords": "Loading...",
            "sProcessing":     "Processing...",
            "sSearch":         "buscar:",
            "sZeroRecords":    "No matching records found",
            "oPaginate": {
                "sFirst":    "First",
                "sLast":     "Last",
                "sNext":     "Next",
                "sPrevious": "Previous"
            },
            "oAria": {
                "sSortAscending":  ": activate to sort column ascending",
                "sSortDescending": ": activate to sort column descending"
            }
        });
}
