"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AuthService = (function () {
            function AuthService($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                this.user = null;
            }
            AuthService.prototype.login = function (email, password) {
            };
            AuthService.prototype.logout = function () {
                this.user = null;
            };
            AuthService.$inject = ['$scope', '$http'];
            return AuthService;
        }());
        Services.AuthService = AuthService;
        angular.module("app").service('authService', AuthService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=authService.js.map