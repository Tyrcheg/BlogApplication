"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AuthService = (function () {
            function AuthService($http, $q, $localStorage) {
                this.$http = $http;
                this.$q = $q;
                this.$localStorage = $localStorage;
                this.serviceBase = 'http://localhost:60110/';
                this.authentication = { isAuth: false, userName: "" };
            }
            AuthService.prototype.saveRegistration = function (registration) {
                this.logout();
                return this.$http.post(this.serviceBase + "api/account/register", registration);
            };
            AuthService.prototype.logout = function () {
                this.$localStorage.remove('authorizationData');
                this.authentication.isAuth = false;
                this.authentication.userName = "";
            };
            AuthService.prototype.fillAuthData = function () {
                var authData = this.$localStorage.getObject('authorizationData');
                if (authData) {
                    this.authentication.isAuth = true;
                    this.authentication.userName = authData.userName;
                }
            };
            AuthService.prototype.login = function (loginData) {
                var _this = this;
                var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
                var deferred = this.$q.defer();
                this.$http.post(this.serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                    .then(function (response) {
                    _this.$localStorage.setObject('authorizationData', { token: response, userName: loginData.userName });
                    _this.authentication.isAuth = true;
                    _this.authentication.userName = loginData.userName;
                    deferred.resolve(response);
                }, function (reason) {
                    _this.logout();
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            AuthService.$inject = ['$http', '$q', '$localStorage'];
            return AuthService;
        }());
        Services.AuthService = AuthService;
        angular.module("app").service('authService', AuthService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//var data = "grant_type=password&username=" + loginData.userName
//    + "&password=" + loginData.password;
//return this.$http.post(this.serviceBase + 'token', data,
//    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
//    .then(
//    (response) => {
//        this.$localStorage.setObject('authorizationData', { token: response, userName: loginData.userName });
//        this.authentication.isAuth = true;
//        this.authentication.userName = loginData.userName;
//    },
//    (error) => {
//        this.logout();
//        console.log(error);
//    }
//    );
//# sourceMappingURL=authService.js.map