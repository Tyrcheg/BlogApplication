"use strict";
var app;
(function (app) {
    var Service;
    (function (Service) {
        var AuthService = (function () {
            function AuthService($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                this.user = null;
            }
            AuthService.prototype.login = function (email, password) {
                //this.$http.get();
            };
            AuthService.prototype.logout = function () {
                this.user = null;
            };
            AuthService.$inject = ['$scope', '$http'];
            return AuthService;
        }());
        Service.AuthService = AuthService;
        angular.module("app").service('authService', AuthService);
    })(Service = app.Service || (app.Service = {}));
})(app || (app = {}));
//# sourceMappingURL=authService.js.map