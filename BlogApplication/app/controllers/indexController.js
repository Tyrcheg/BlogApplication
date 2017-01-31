'use strict';
var app;
(function (app) {
    var IndexController = (function () {
        function IndexController($location, $scope, $rootScope, blogService) {
            this.$location = $location;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.blogService = blogService;
            this.helloWorld = "hello world";
            this.helloMessage = "hello from index controller";
        }
        IndexController.$inject = ['$location', '$scope', '$rootScope', 'blogService'];
        return IndexController;
    }());
    app.IndexController = IndexController;
    angular.module("app").controller('indexController', IndexController);
})(app || (app = {}));
//# sourceMappingURL=indexController.js.map