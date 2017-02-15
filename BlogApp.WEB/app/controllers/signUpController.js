'use strict';
var app;
(function (app) {
    var SignUpController = (function () {
        function SignUpController($http, appTitleService) {
            this.$http = $http;
            this.appTitleService = appTitleService;
            this.registration = {};
            this.message = "";
            this.savedSuccessfully = false;
            appTitleService.title = "Sign Up";
        }
        SignUpController.prototype.signUp = function (registration) {
            var _this = this;
            this.$http.post("http://localhost:60110/api/account/register", registration)
                .then(function (response) { _this.message = response.statusText; _this.savedSuccessfully = true; }, function (error) { _this.message = error.data; _this.savedSuccessfully = true; });
        };
        SignUpController.$inject = ['$http', 'appTitleService'];
        return SignUpController;
    }());
    app.SignUpController = SignUpController;
    angular.module('app').controller('signUpController', SignUpController);
})(app || (app = {}));
