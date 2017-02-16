'use strict';
var app;
(function (app) {
    var LoginController = (function () {
        function LoginController($http, $location, appTitleService, authService) {
            this.$http = $http;
            this.$location = $location;
            this.appTitleService = appTitleService;
            this.authService = authService;
            this.message = '';
            this.loginData = { userName: "", password: "" };
            appTitleService.title = "Login";
        }
        LoginController.prototype.login = function () {
            var _this = this;
            this.authService.login(this.loginData)
                .then(function (response) {
                _this.$location.path('/');
            }, function (error) {
                return _this.message = error.data.error_description;
            });
        };
        ;
        LoginController.$inject = ['$http', '$location', 'appTitleService', 'authService'];
        return LoginController;
    }());
    app.LoginController = LoginController;
    angular.module('app').controller('loginController', LoginController);
})(app || (app = {}));
//# sourceMappingURL=loginController.js.map