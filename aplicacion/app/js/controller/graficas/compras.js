'use strict';

angular.module('seminarioUmg').controller('graficaCompraCtrl', ['$scope', '$timeout','$http', '$localStorage',
function ($scope, $timeout, $http, $localStorage) {

    $scope.meses = false;
    $scope.dataMain = [];

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
                    elementClick: function (t){
                        if (!$scope.meses) {
                            $http.get('/api/v1/grafica-compras/'+t.data.label+'?token='+$localStorage.token).success(function(data) {
                                $scope.dataUpdate = [{
                                    key: 'Ventas Mensuales',
                                    values: data
                                }];
                                $scope.options.chart.xAxis.axisLabel = 'Meses';
                                $scope.api.updateWithData($scope.dataUpdate);
                                $scope.api.refresh();
                                $scope.meses = true;
                            });
                        }
                    },
                    elementMouseover: function (t){
                        $scope.showInversion = t.data.value;
                    }
                }
            },
            tooltip: {
                valueFormatter: function () {
                    return 'Inversion:' + $scope.showInversion;
                }
            }

        }
    };

    $scope.regresarGrafica = function () {
        $scope.meses = false;
        $scope.options.chart.xAxis.axisLabel = 'Años';
        $scope.api.updateWithData($scope.dataMain);
        $scope.api.refresh();
    };

    $scope.dataUpdate = [{
        key: 'Grafica Mensual',
        values: []
    }];

    $http.get('/api/v1/grafica-compras?token='+$localStorage.token).success(function(data) {
        $scope.data = [{
            key: 'Compras Anuales',
            values: data
        }];
        $scope.api.updateWithData($scope.data);
        $scope.api.refresh();
        $scope.dataMain = $scope.data;
    });

    var redimensionar = function() {
        $scope.options.chart.width = 0;
        $scope.options.chart.height = 0;
    };

    $timeout(redimensionar, 50);
}]);
