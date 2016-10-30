'use strict';

angular.module('seminarioUmg').controller('graficaVentaCtrl', ['$scope', '$timeout', '$http', '$localStorage',
function ($scope, $timeout, $http, $localStorage) {

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
                    },
                    elementMouseover: function (t,u){
                        $scope.showGanancia = t.data.ganancia;
                    }
                }
            },
            tooltip: {
                valueFormatter: function (d) {
                    return 'Ganancia:' + $scope.showGanancia;
                }
            }

        }
    };

    $scope.regresarGrafica = function () {
        $scope.api.updateWithData($scope.data);
        $scope.api.refresh();
    };

    $scope.dataUpdate = [{
        key: 'Grafica Mensual',
        values: []
    }];

    $http.get('/api/v1/grafica-ventas?token='+$localStorage.token).success(function(data) {
        $scope.data = [{
            key: 'Ventas Anuales',
            values: data
        }];
        $scope.api.updateWithData($scope.data);
        $scope.api.refresh();
    });

    var redimensionar = function() {
        $scope.options.chart.width = 0;
        $scope.options.chart.height = 0;
    }

    $timeout(redimensionar, 50);
}]);
