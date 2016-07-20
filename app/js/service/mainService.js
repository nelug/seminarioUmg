  'use strict';

  angular.module('seminarioUmg').service('MainService', ['$q', function($q){
    var menu = [
      {
        titulo: 'Personas',
        icono: 'accessibility',
        estado: true,
        accion: '/persona'
      }
    ];

    return {
      cargarMenu : function() {
        return $q.when(menu);
      }
    };
}]);
