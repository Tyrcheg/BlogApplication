'use strict';
var app;
(function (app) {
    var IndexController = (function () {
        function IndexController($location, $scope, $rootScope, $route, appTitleService) {
            var _this = this;
            this.$location = $location;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.$route = $route;
            this.appTitleService = appTitleService;
            /* authentication = new Authentication(); */
            this.authentication = { isAuth: true, userName: "Tyrik" };
            this.$rootScope.$on("$routeChangeSuccess", function (event, current) {
                return (current.loadedTemplateUrl == "app/templates/blogs.html") ?
                    _this.appTitleService.setTitle("Blog Application") :
                    (current.loadedTemplateUrl == "app/templates/myBlog.html") ?
                        _this.appTitleService.setTitle("My Blog") : null;
            });
        }
        IndexController.prototype.logOut = function () {
            this.authentication.isAuth = false;
        };
        IndexController.prototype.logIn = function () {
            this.authentication.isAuth = true;
        };
        IndexController.prototype.onRootChange = function () {
            console.log(this.$route.template);
        };
        IndexController.$inject = ['$location', '$scope', '$rootScope', '$route', 'appTitleService'];
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
