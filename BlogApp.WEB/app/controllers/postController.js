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
            this.commentSaveErrors = [];
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
                userId: "76f92ba9-ca11-43cc-83be-87160ef80b4e",
                text: comment.text,
                postId: this.postId
            };
            this.commentService.saveComment(this.newComment)
                .then(function (success) {
                _this.loadPost();
                _this.newComment = {};
            }, function (error) { return _this.commentSaveErrors = error.message; });
        };
        PostController.prototype.removeComment = function (id) {
            var _this = this;
            this.commentService.deleteComment(id).then(function (success) { return _this.loadPost(); }, function (error) { return _this.errors = error.data; });
        };
        PostController.$inject = ['$location', '$routeParams',
            'postService', 'appTitleService', 'commentService'];
        return PostController;
    }());
    app.PostController = PostController;
    angular.module("app").controller('postController', PostController);
})(app || (app = {}));
//# sourceMappingURL=postController.js.map