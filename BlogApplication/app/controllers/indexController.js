'use strict';
var app;
(function (app) {
    var IndexController = (function () {
        function IndexController($location, $scope, $rootScope) {
            this.$location = $location;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.pageTitle = "Blog Application";
            /* authentication = new Authentication(); */
            this.authentication = { isAuth: true, userName: "Tyrik" };
        }
        IndexController.prototype.changeTitle = function (name) {
            this.pageTitle = name;
        };
        IndexController.prototype.logOut = function () {
            this.authentication.isAuth = false;
        };
        IndexController.prototype.logIn = function () {
            this.authentication.isAuth = true;
        };
        IndexController.$inject = ['$location', '$scope', '$rootScope'];
        return IndexController;
    }());
    app.IndexController = IndexController;
    angular.module("app").controller('indexController', IndexController);
})(app || (app = {}));
var Authentication = (function () {
    function Authentication() {
        this.isAuth = true;
        this.userName = "Arthur";
    }
    return Authentication;
}());
//# sourceMappingURL=indexController.js.map