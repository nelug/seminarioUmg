'use strict';

angular.module('InicialApp').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });

   $routeProvider
      .when('/persona', {
         templateUrl: 'html/persona.html',
         controller: 'PersonaCtrl'
      })
      .otherwise({
         redirectTo: '/'
      });
}]);
