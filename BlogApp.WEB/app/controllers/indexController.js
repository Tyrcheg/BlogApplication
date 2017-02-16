'use strict';
var app;
(function (app) {
    var IndexController = (function () {
        function IndexController($rootScope, appTitleService, $localStorage, $location, authService) {
            this.$rootScope = $rootScope;
            this.appTitleService = appTitleService;
            this.$localStorage = $localStorage;
            this.$location = $location;
            this.authService = authService;
            this.authentication = this.authService.authentication;
            this.date = Date.now();
            this.titleChangeConfig();
        }
        IndexController.prototype.logOut = function () {
            this.authService.logout();
            this.$location.path('/');
        };
        IndexController.prototype.titleChangeConfig = function () {
            var _this = this;
            this.$rootScope.$on("$routeChangeSuccess", function (e, current) {
                return (current.loadedTemplateUrl == "app/templates/blogs.html") ?
                    _this.appTitleService.title = "Blog Application" :
                    (current.loadedTemplateUrl == "app/templates/myBlog.html") ?
                        _this.appTitleService.title = "My Blog" : null;
            });
        };
        IndexController.$inject = [
            '$rootScope', 'appTitleService',
            '$localStorage', '$location',
            'authService'];
        return IndexController;
    }());
    app.IndexController = IndexController;
    angular.module("app").controller('indexController', IndexController);
})(app || (app = {}));
//# sourceMappingURL=indexController.js.map