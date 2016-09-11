'use strict';

angular.module('seminarioUmg').factory('AuthService', ['$q', '$timeout', '$http',
function ($q, $timeout, $http) {
    var user = null;
    
    function isLoggedIn() {
        if(user) {
            return true;
        } else {
            return false;
        }
    }
    
    function getUserStatus() {
        return $http.get('/api/user/status')
        .success(function (data) {
            if(data.status){
                user = true;
            } else {
                user = false;
            }
        })
        .error(function () {
            user = false;
        });
    }
    
    function login(username, password) {
        var deferred = $q.defer();
        
        $http.post('/api/user/login',
        {username: username, password: password})
        .success(function (data, status) {
            if(status === 200 && data.status){
                user = true;
                deferred.resolve();
            } else {
                user = false;
                deferred.reject();
            }
        })
        .error(function () {
            user = false;
            deferred.reject();
        });
        
        return deferred.promise;
    }
    
    function logout() {
        var deferred = $q.defer();
        
        $http.get('/api/user/logout')
        .success(function () {
            user = false;
            deferred.resolve();
        })
        .error(function () {
            user = false;
            deferred.reject();
        });
        
        return deferred.promise;
    }
    
    function register(userData) {
        var deferred = $q.defer();
        
        $http.post('/api/user/register', userData)
        .success(function (data, status) {
            if(status === 200 && data.status){
                deferred.resolve();
            } else {
                deferred.reject();
            }
        })
        .error(function () {
            deferred.reject();
        });
        
        return deferred.promise;
    }
    
    function buscarTodos($scope) {
        $http.get('/api/user/all').success(function(data) {
            $scope.usuarios = data;
        });
    }
    
    return ({
        isLoggedIn: isLoggedIn,
        getUserStatus: getUserStatus,
        login: login,
        logout: logout,
        register: register,
        buscarTodos: buscarTodos
    });
}]);