"use strict";
var app;
(function (app) {
    var PostController = (function () {
        function PostController($location, $routeParams, $scope, postService, $http, appTitleService) {
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.$scope = $scope;
            this.postService = postService;
            this.$http = $http;
            this.appTitleService = appTitleService;
            this.errors = [];
            this.commentSaveErrors = [];
            this.newComment = {};
            this.postId = $routeParams.postId;
            this.loadPost();
        }
        PostController.prototype.loadPost = function () {
            var _this = this;
            this.postService.getPost(this.postId)
                .then(function (response) { _this.post = response.data; _this.appTitleService.setTitle(_this.post.title); }, function (error) { return _this.errors = error.data; });
        };
        PostController.prototype.saveComment = function (comment) {
            var _this = this;
            this.newComment = {
                userName: "Artem",
                text: comment.text,
                postId: this.postId,
                dateCreated: Date.now()
            };
            this.postService.saveComment(this.newComment)
                .then(function (success) {
                _this.loadPost();
                _this.newComment = {};
            }, function (error) { return _this.commentSaveErrors = error.message; });
        };
        PostController.prototype.removeComment = function (id) {
            var _this = this;
            this.postService.deleteComment(id).then(function (success) { return _this.loadPost(); }, function (error) { return _this.errors = error.data; });
        };
        PostController.$inject = ['$location', '$routeParams', '$scope',
            'postService', '$http', 'appTitleService'];
        return PostController;
    }());
    app.PostController = PostController;
    angular.module("app").controller('postController', PostController);
})(app || (app = {}));
//# sourceMappingURL=postController.js.map