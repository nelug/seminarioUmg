  'use strict';

  angular.module('seminarioUmg',[ 'ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial'])
  .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('brown');
  });
