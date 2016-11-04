'use strict';

angular.module('seminarioUmg').factory('AuthService', ['$q', '$timeout', '$http', '$rootScope', '$localStorage', 'toaster', 'md5',
function ($q, $timeout, $http, $rootScope, $localStorage, toaster, md5) {
    var user = null;

    function isLoggedIn() {
        if(user) {
            return true;
        } else {
            return false;
        }
    }

    function getUserStatus() {
        return $http.get('api/v1/user/status?token='+$localStorage.token)
        .success(function (data) {
            if(data.status){
                user = true;
                $rootScope.userNow = data.usuario;
            } else {
                user = false;
                $rootScope.userNow = [];
            }
        })
        .error(function () {
            user = false;
        });
    }

    function login(email, password) {
        var deferred = $q.defer();

        $http.post('api/v1/user/login',
        {
            email: email,
            password: md5.createHash(password)
        })
        .success(function (data, status) {
            if(status === 200 && data.status){
                $localStorage.token = data.token;
                user = true;
                deferred.resolve();
            } else {
                user = false;
                deferred.reject();
            }
        })
        .error(function (data) {
            user = false;
            toaster.warning('Advertencia.!', data.message);
            deferred.reject();
        });

        return deferred.promise;
    }

    function logout() {
        var deferred = $q.defer();
            user = false;
            deferred.resolve();
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

    return ({
        isLoggedIn: isLoggedIn,
        getUserStatus: getUserStatus,
        login: login,
        logout: logout,
        register: register
    });
}]);
