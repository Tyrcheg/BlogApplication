"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AuthService = (function () {
            function AuthService($http, $localStorage) {
                this.$http = $http;
                this.$localStorage = $localStorage;
                this.authentication = { isAuth: false, userName: "" };
            }
            AuthService.prototype.login = function (email, password) {
            };
            AuthService.prototype.logout = function () {
            };
            AuthService.$inject = ['$http', '$localStorage'];
            return AuthService;
        }());
        Services.AuthService = AuthService;
        angular.module("app").service('authService', AuthService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
