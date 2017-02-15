"use strict";
var app;
(function (app) {
    var UserController = (function () {
        function UserController() {
        }
        UserController.$inject = [];
        return UserController;
    }());
    app.UserController = UserController;
    angular.module("app").controller('userController', UserController);
})(app || (app = {}));
