'use strict';

angular.module('seminarioUmg').factory('RestMaster', ['$resource', 'Config', function($resource, Config) {
   var servicios = function(recurso, metodos) {
      metodos = metodos || {};
      var metodosDefault = {
         contar: {
            method: 'POST',
            params: {
               metodo: 'contar'
            }
         },
         crear: {
            method: 'POST',
         },
         editar: {
            method: 'PUT'
         },
         borrar: {
            method: 'DELETE',
            params: {
               param1: '@id'
            }
         },
         buscarTodo: {
            method: 'GET'
         },
         buscarID: {
            method: 'GET',
            params: {
               param1: '@id'
            }
         },
         buscar: {
            method: 'POST',
            params: {
               metodo: 'buscar'
            }
         }
      };

      angular.extend(metodosDefault, metodos);
      return $resource(Config.restUrl + recurso + '/:metodo/:param1', {}, metodosDefault);
   };

   return {
      restMaster: servicios
   };
}]);