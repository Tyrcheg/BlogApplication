"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AuthInterceptorService = (function () {
            function AuthInterceptorService($q, $localStorage) {
                this.$q = $q;
                this.$localStorage = $localStorage;
            }
            AuthInterceptorService.prototype.request = function (config) {
                config.headers = config.header || {};
                var authData = this.$localStorage.getObject('authorizationData');
                if (authData)
                    config.headers.Authorization = 'Bearer' + authData.token;
                return config;
            };
            AuthInterceptorService.prototype.responseError = function (rejection) {
                if (rejection.status === 401) {
                }
                return this.$q.reject(rejection);
            };
            AuthInterceptorService.$inject = ['$q', '$localStorage'];
            return AuthInterceptorService;
        }());
        Services.AuthInterceptorService = AuthInterceptorService;
        angular.module('app').service("authInterceptorService", AuthInterceptorService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=authInterceptorService.js.map