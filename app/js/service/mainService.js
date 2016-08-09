'use strict';

angular.module('seminarioUmg').service('MainService', ['$q', '$http', function($q, $http){
    var menu = $http.get('/api/menu').success(function(data) {
        return data;
    });
    
    return {
        cargarMenu : function() {
            return $q.when(menu);
        }
    };
}]);
