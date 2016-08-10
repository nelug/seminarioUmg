  'use strict';

  angular.module('seminarioUmg',[ 'ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial', 'md.data.table'])
  .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('brown');
  }).run(function ($rootScope, $location, $route, AuthService) {
    $rootScope.$on('$routeChangeStart',
      function (event, next, current) {
        AuthService.getUserStatus()
        .then(function(){
          if (next.access.restricted && !AuthService.isLoggedIn()){
            $location.path('/login');
            $route.reload();
          }
        });
    });
  });
