'use strict'
angular.module('seminarioUmg',['ngMaterial', 'ngMessages', 'material.svgAssetsCache',])
    .controller('permisoController',['$scope', '$location', 'AuthService',] function($scope, $location, AuthService) {
      $scope.sizes = [
          "Jorge",
          "Leonel",
          "Abdiel",
          "Carlos"
      ];
      $scope.toppings = [
        { category: 'mod', name: 'compras' },
        { category: 'mod', name: 'ventas' },
        { category: 'mod', name: 'graficas' },
        { category: 'mod', name: 'usuarios' },
        { category: 'mod', name: 'proveedores' }
      ];
      $scope.selectedToppings = [];
      $scope.printSelectedToppings = function printSelectedToppings() {
        var numberOfToppings = this.selectedToppings.length;

        // If there is more than one topping, we add an 'and'
        // to be gramatically correct. If there are 3+ toppings
        // we also add an oxford comma.
        if (numberOfToppings > 1) {
          var needsOxfordComma = numberOfToppings > 2;
          var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' y ';
          var lastTopping = lastToppingConjunction +
              this.selectedToppings[this.selectedToppings.length - 1];
          return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
        }

        return this.selectedToppings.join('');
      };
    });
