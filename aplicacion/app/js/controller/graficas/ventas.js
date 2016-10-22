'use strict';

angular.module('seminarioUmg').controller('graficaVentaCtrl', ['$scope', '$timeout', function ($scope, $timeout) {


    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            width: 600,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 55
            },
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            showValues: true,
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'Años'
            },
            yAxis: {
                axisLabel: 'Ventas',
                axisLabelDistance: -10
            },
            discretebar: {
                dispatch: {
                    elementClick: function (t,u){
                        $scope.api.updateWithData($scope.dataUpdate);
                        $scope.api.refresh();
                    }
                }
            }

        }
    };

    $scope.regresarGrafica = function () {
        $scope.api.updateWithData($scope.data);
        $scope.api.refresh();
    };

    $scope.dataUpdate = [{
        key: 'Cumulative Return',
        values: [
            { 'label' : 'A' , 'value' : 110 },
            { 'label' : 'B' , 'value' : 220 },
            { 'label' : 'C' , 'value' : 330 },
            { 'label' : 'D' , 'value' : 205 },
            { 'label' : 'E' , 'value' : 105 },
        ]
    }];

    $scope.data = [{
        key: 'Cumulative Return',
        values: [
            { 'label' : 'A' , 'value' : 10 },
            { 'label' : 'B' , 'value' : 20 },
            { 'label' : 'C' , 'value' : 30 },
            { 'label' : 'D' , 'value' : 25 },
            { 'label' : 'E' , 'value' : 15 },
            { 'label' : 'F' , 'value' : 35 },
            { 'label' : 'G' , 'value' : 50 },
            { 'label' : 'H' , 'value' : 12 },
            { 'label' : 'I' , 'value' : 15 },
            { 'label' : 'J' , 'value' : 44 },
            { 'label' : 'K' , 'value' : 56 },
            { 'label' : 'L' , 'value' : 30 }
        ]
    }];

    //capturar el tama;o del contedor y usar el 100% del ancho y el 90% del alto
    var redimensionar = function() {
        $scope.options.chart.width = 0;
        $scope.options.chart.height = 0;
    }

    $timeout(redimensionar, 50);
}]);
