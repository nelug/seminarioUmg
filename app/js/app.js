  'use strict';

  angular.module('seminarioUmg',[ 'ngRoute', 'ngResource', 'ngMessages', 'ngAnimate', 'ngMdIcons', 'ngMaterial', 'md.data.table'])
  .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('brown');
  });
