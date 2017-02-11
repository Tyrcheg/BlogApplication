"use strict";

module app {

    interface IRouteParams extends ng.route.IRouteParamsService {
        postId: number;
    }

    export class PostController {
        static $inject = ['$location', '$routeParams',
            'postService', 'commentService', 'appTitleService'];

        post;
        postId: number;
        errors = [];
        commentSaveErrors = [];
        newComment = {};

        constructor(private $location: ng.ILocationService,
            private $routeParams: IRouteParams,
            private postService: app.Services.PostService,
            private appTitleService: app.Services.AppTitleService,
            private commentService: app.Services.CommentService) {

            this.postId = $routeParams.postId;
            this.loadPost();
        }

        loadPost() {
            this.postService.getPost(this.postId)
                .then(
                (response) => { this.post = response.data; this.appTitleService.title = this.post.title; },
                (error) => { this.errors = error.data; this.appTitleService.title = "Error"; }
                );
        }

        saveComment(comment) {
            this.newComment = {
                userName: "Artem", //need auth service
                text: comment.text,
                postId: this.postId
            };

            this.commentService.saveComment(this.newComment)
                .then(
                (success) => {
                    this.loadPost();
                    this.newComment = {};
                },
                (error) => this.commentSaveErrors = error.message);
        }

        removeComment(id) {
            this.commentService.deleteComment(id).then(
                (success) => this.loadPost(),
                (error) => this.errors = error.data);

        }
    }

    angular.module("app").controller('postController', PostController);
}