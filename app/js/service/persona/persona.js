'use strict';

angular.module('seminarioUmg').service('Persona', ['$q', function($q){
  var menu = [
    {
      titulo: 'Personas',
      icono: 'accessibility',
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
