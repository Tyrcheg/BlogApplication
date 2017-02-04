"use strict";
var app;
(function (app) {
    var SingleBlogController = (function () {
        function SingleBlogController($location, $routeParams, $scope, blogservice, $http, appTitleService) {
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.$scope = $scope;
            this.blogservice = blogservice;
            this.$http = $http;
            this.appTitleService = appTitleService;
            this.posts = [];
            this.errors = [];
            this.blogId = $routeParams.blogId;
            this.appTitleService.setTitle($routeParams.userName + "'s blog");
            this.loadPosts();
        }
        SingleBlogController.prototype.loadPosts = function () {
            var _this = this;
            this.blogservice.getBlogPosts(this.blogId)
                .then(function (response) { return _this.posts = response.data; }, function (error) { return _this.errors = error.data; });
        };
        SingleBlogController.prototype.goToPostWithId = function (id) {
            this.$location.path('/Post/' + id);
        };
        SingleBlogController.$inject = ['$location', '$routeParams', '$scope',
            'blogService', '$http', 'appTitleService'];
        return SingleBlogController;
    }());
    app.SingleBlogController = SingleBlogController;
    angular.module("app").controller('singleBlogController', SingleBlogController);
})(app || (app = {}));
