  'use strict';

  angular.module('seminarioUmg').service('MainService', ['$q', function($q){
    var menu = [
      {
        titulo: 'Personas',
        icono: 'accessibility',
        estado: true,
        link: '/persona'
    },{
        titulo: 'Personas',
        icono: 'dns',
        estado: true,
        link: '/persona'
      }
    ];

    return {
      cargarMenu : function() {
        return $q.when(menu);
      }
    };
}]);
