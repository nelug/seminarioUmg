'use strict';

angular.module('seminarioUmg')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'MainController',
        access: {restricted: true}
      })
      .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginController',
        access: {restricted: false}
      })
      .when('/logout', {
        controller: 'logoutController',
        access: {restricted: true}
      })
      .when('/register', {
        templateUrl: 'view/register.html',
        controller: 'registerController',
        access: {restricted: false}
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
