
'use strict';

angular.module('seminarioUmg')
    .factory('Persona', ['RestMaster', function(RestMaster) {
        return RestMaster.restMaster('persona');
    }]);