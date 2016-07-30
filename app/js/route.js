'use strict';

angular.module('seminarioUmg')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });

   $routeProvider
      .when('/persona', {
         templateUrl: 'view/persona.html',
         controller: 'PersonaCtrl'
      })
      .otherwise({
         redirectTo: '/'
      });
}]);
