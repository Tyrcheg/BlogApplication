'use strict';
var app;
(function (app) {
    var IndexController = (function () {
        function IndexController($rootScope, appTitleService) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.appTitleService = appTitleService;
            this.authentication = { isAuth: true, userName: "Tyrik" };
            this.date = Date.now();
            $rootScope.$on("$routeChangeSuccess", function (e, current) {
                return (current.loadedTemplateUrl == "app/templates/blogs.html") ?
                    _this.appTitleService.title = "Blog Application" :
                    (current.loadedTemplateUrl == "app/templates/myBlog.html") ?
                        _this.appTitleService.title = "My Blog" : null;
            });
        }
        IndexController.prototype.logOut = function () {
            this.authentication.isAuth = false;
        };
        IndexController.prototype.logIn = function () {
            this.authentication.isAuth = true;
        };
        IndexController.$inject = ['$rootScope', 'appTitleService'];
        return IndexController;
    }());
    app.IndexController = IndexController;
    angular.module("app").controller('indexController', IndexController);
})(app || (app = {}));
