"use strict";
var app;
(function (app) {
    var SingleBlogController = (function () {
        function SingleBlogController($location, $routeParams, blogservice, appTitleService) {
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.blogservice = blogservice;
            this.appTitleService = appTitleService;
            this.posts = [];
            this.errors = [];
            this.blogId = $routeParams.blogId;
            this.appTitleService.title = $routeParams.userName + "'s blog";
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
        SingleBlogController.$inject = ['$location', '$routeParams', 'blogService', 'appTitleService'];
        return SingleBlogController;
    }());
    app.SingleBlogController = SingleBlogController;
    angular.module("app").controller('singleBlogController', SingleBlogController);
})(app || (app = {}));
