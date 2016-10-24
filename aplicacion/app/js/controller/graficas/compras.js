'use strict';

angular.module('seminarioUmg').controller('graficaCompraCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

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
            { 'label' : 'A' , 'value' : 12 },
            { 'label' : 'B' , 'value' : 23 },
            { 'label' : 'C' , 'value' : 30 },
            { 'label' : 'D' , 'value' : 25 },
            { 'label' : 'E' , 'value' : 32 },
            { 'label' : 'F' , 'value' : 35 },
            { 'label' : 'G' , 'value' : 34 },
            { 'label' : 'H' , 'value' : 56 },
            { 'label' : 'I' , 'value' : 15 },
            { 'label' : 'J' , 'value' : 78 },
            { 'label' : 'K' , 'value' : 53 },
            { 'label' : 'L' , 'value' : 30 }
        ]
    }];

    $scope.data = [{
        key: 'Cumulative Return',
        values: [
            { 'label' : 'A' , 'value' : 444 },
            { 'label' : 'B' , 'value' : 233 },
            { 'label' : 'C' , 'value' : 330 },
            { 'label' : 'D' , 'value' : 424 },
            { 'label' : 'E' , 'value' : 123 }
        ]
    }];


    var redimensionar = function() {
        $scope.options.chart.width = 0;
        $scope.options.chart.height = 0;
    }

    $timeout(redimensionar, 50);
}]);
