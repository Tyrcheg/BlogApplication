'use strict';
var app;
(function (app) {
    var SignUpController = (function () {
        function SignUpController($http, appTitleService, authService, $timeout, $location) {
            this.$http = $http;
            this.appTitleService = appTitleService;
            this.authService = authService;
            this.$timeout = $timeout;
            this.$location = $location;
            this.registration = {};
            this.message = '';
            this.savedSuccessfully = false;
            appTitleService.title = "Sign Up";
        }
        SignUpController.prototype.signUp = function () {
            var _this = this;
            this.authService.saveRegistration(this.registration).then(function (response) {
                _this.savedSuccessfully = true;
                _this.message = "You have successfully register a new account."
                    + "You will be redirected to login page in few seconds.";
                _this.registration = {};
                _this.startTimer();
            }, function (response) {
                var errors = [];
                for (var key in response.data.modelState)
                    for (var i = 0; i < response.data.modelState[key].length; i++)
                        errors.push(response.data.modelState[key][i] + " ");
                _this.message = "Failed to register user due to: " + errors.join(' ');
            });
        };
        SignUpController.prototype.startTimer = function () {
            var _this = this;
            var timer = this.$timeout(function () {
                _this.$timeout.cancel(timer);
                _this.$location.path('/Account/Login');
            }, 4000);
        };
        SignUpController.$inject = ['$http', 'appTitleService', 'authService', '$timeout', '$location'];
        return SignUpController;
    }());
    app.SignUpController = SignUpController;
    angular.module('app').controller('signUpController', SignUpController);
})(app || (app = {}));
//# sourceMappingURL=signUpController.js.map