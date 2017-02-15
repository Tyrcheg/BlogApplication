'use strict';
var app;
(function (app) {
    var LoginController = (function () {
        function LoginController() {
        }
        return LoginController;
    }());
    app.LoginController = LoginController;
    angular.module('app').controller('loginController', LoginController);
})(app || (app = {}));
