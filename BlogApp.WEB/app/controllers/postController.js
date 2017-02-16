"use strict";
var app;
(function (app) {
    var PostController = (function () {
        function PostController($location, $routeParams, postService, appTitleService, commentService) {
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.postService = postService;
            this.appTitleService = appTitleService;
            this.commentService = commentService;
            this.errors = [];
            this.commentErrors = '';
            this.newComment = {};
            this.postId = $routeParams.postId;
            this.loadPost();
        }
        PostController.prototype.loadPost = function () {
            var _this = this;
            this.postService.getPost(this.postId)
                .then(function (response) { _this.post = response.data; _this.appTitleService.title = _this.post.title; }, function (error) { _this.errors = error.data; _this.appTitleService.title = "Error"; });
        };
        PostController.prototype.saveComment = function (comment) {
            var _this = this;
            this.newComment = {
                userId: "e5e4a5e3-6381-4fa5-861b-b4e36060887c",
                text: comment.text,
                postId: this.postId
            };
            this.commentService.saveComment(this.newComment)
                .then(function (success) {
                _this.loadPost();
                _this.newComment = {};
            }, function (error) { return _this.commentErrors = error.data.message; });
        };
        PostController.prototype.removeComment = function (id) {
            var _this = this;
            this.commentService.deleteComment(id).then(function (success) { return _this.loadPost(); }, function (error) { return _this.commentErrors = error.data.message; });
        };
        PostController.$inject = ['$location', '$routeParams',
            'postService', 'appTitleService', 'commentService'];
        return PostController;
    }());
    app.PostController = PostController;
    angular.module("app").controller('postController', PostController);
})(app || (app = {}));
//# sourceMappingURL=postController.js.map