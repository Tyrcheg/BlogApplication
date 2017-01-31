'use strict';
var app;
(function (app) {
    var BlogController = (function () {
        function BlogController($location, $scope, $rootScope, blogService) {
            this.$location = $location;
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.blogService = blogService;
            this.helloWorld = "hello world";
            this.helloMessage = "hello from blog controller";
        }
        BlogController.$inject = ['$location', '$scope', '$rootScope', 'blogService'];
        return BlogController;
    }());
    app.BlogController = BlogController;
    angular.module("app").controller('blogController', BlogController);
})(app || (app = {}));
//# sourceMappingURL=blogController.js.map