"use strict";
var app;
(function (app) {
    var SingleBlogController = (function () {
        function SingleBlogController($routeParams, $scope, blogservice, $http) {
            this.$routeParams = $routeParams;
            this.$scope = $scope;
            this.blogservice = blogservice;
            this.$http = $http;
            this.blogId = $routeParams.blogId;
            this.username = $routeParams.userName;
            this.changeTheTitle();
        }
        SingleBlogController.prototype.changeTheTitle = function () {
            var vm = this;
            app.BlogController.apply(vm, arguments);
        };
        SingleBlogController.$inject = ['$routeParams', '$scope', 'blogService', '$http'];
        return SingleBlogController;
    }());
    app.SingleBlogController = SingleBlogController;
    angular.module("app").controller('singleBlogController', SingleBlogController);
})(app || (app = {}));
//# sourceMappingURL=blog.singleBlogController.js.map