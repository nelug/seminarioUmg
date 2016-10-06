'use strict';

angular.module('seminarioUmg').controller('graficaVentaCtrl', ['$scope', function ($scope) {
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
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
            }
        }
    };
    $scope.data = [{
        key: "Cumulative Return",
        values: [
            { "label" : "A" , "value" : 10 },
            { "label" : "B" , "value" : 20 },
            { "label" : "C" , "value" : 30 },
            { "label" : "D" , "value" : 25 },
            { "label" : "E" , "value" : 15 },
            { "label" : "F" , "value" : 35 },
            { "label" : "G" , "value" : 50 },
            { "label" : "H" , "value" : 12 }
        ]
    }];
}]);
