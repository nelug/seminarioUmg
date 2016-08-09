'use strict';

angular.module('seminarioUmg').controller('PersonaCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    
    $scope.newPersona = {};
    $scope.personas = {};
    $scope.tituloEncabezado = 'Personas';
    $scope.selected = false;
    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];
    
    $scope.query = { order: 'nombre', limit: 5, page: 1 };
  
  
    // Obtenemos todos los datos de la base de datos
    $http.get('/api/persona').success(function(data) {
        $scope.personas = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });
    
    // Función para registrar a una persona
    $scope.registrarPersona = function() {
        $http.post('/api/persona', $scope.newPersona)
        .success(function(data) {
            $scope.newPersona = {}; // Borramos los datos del formulario
            $scope.personas = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    
    // Función para editar los datos de una persona
    $scope.modificarPersona = function() {
        $http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
        .success(function(data) {
            $scope.newPersona = {}; // Borramos los datos del formulario
            $scope.personas = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    
    // Función que borra un objeto persona conocido su id
    $scope.borrarPersona = function() {
        $http.delete('/api/persona/' + $scope.newPersona._id)
        .success(function(data) {
            $scope.newPersona = {};
            $scope.personas = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };
    
    // Función para coger el objeto seleccionado en la tabla
    $scope.selectPerson = function(persona) {
        $scope.newPersona = persona;
        $scope.selected = true;
        console.log($scope.newPersona, $scope.selected);
    };
    
}]);


