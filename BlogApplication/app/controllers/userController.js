"use strict";
var app;
(function (app) {
    var UserController = (function () {
        function UserController() {
        }
        return UserController;
    }());
    app.UserController = UserController;
    angular.module("app").controller('userController', UserController);
})(app || (app = {}));
