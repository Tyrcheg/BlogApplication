'use strict';
var app;
(function (app) {
    var BlogController = (function () {
        function BlogController($rootScope, $scope, $http, $location, blogService) {
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.$http = $http;
            this.$location = $location;
            this.blogService = blogService;
            this.requestError = [];
            this.blogs = [];
            this.loadBlogs();
            this.mySort = undefined;
            this.sortUnsort = "Sort";
        }
        BlogController.prototype.loadBlogs = function () {
            var _this = this;
            this.blogService.getAllBlogs()
                .then(function (response) { return _this.blogs = response.data; }, function (error) { return _this.requestError = error.data; });
        };
        BlogController.prototype.sort = function () {
            if (this.sortUnsort == "Sort") {
                this.sortUnsort = "Unsort";
                this.mySort = "name";
            }
            else {
                this.sortUnsort = "Sort";
                this.mySort = undefined;
            }
        };
        BlogController.prototype.goToBlogWithId = function (id, username) {
            this.$location.path('/Blog/' + id + '/' + username);
        };
        BlogController.prototype.goToAuthorWithId = function (id, event) {
            event.stopPropagation();
            this.$location.path('/User/' + id);
        };
        BlogController.$inject = ['$rootScope', '$scope', '$http', '$location', 'blogService'];
        return BlogController;
    }());
    app.BlogController = BlogController;
    angular.module("app").controller('blogController', BlogController);
})(app || (app = {}));
//# sourceMappingURL=blogController.js.map