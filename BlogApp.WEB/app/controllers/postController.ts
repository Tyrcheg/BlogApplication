"use strict";

module app {

    interface IRouteParams extends ng.route.IRouteParamsService {
        postId: number;
    }

    export class PostController {
        static $inject = ['$location', '$routeParams',
            'postService', 'appTitleService', 'commentService'];

        post;
        postId: number;
        errors = [];
        commentErrors = '';

        newComment = {};

        constructor(private $location: ng.ILocationService,
            private $routeParams: IRouteParams,
            private postService: app.Services.PostService,
            private appTitleService: app.Services.AppTitleService,
            private commentService: app.Services.CommentService ) {

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
                userId: "e5e4a5e3-6381-4fa5-861b-b4e36060887c",
                text: comment.text,
                postId: this.postId
            };

            this.commentService.saveComment(this.newComment)
                .then(
                (success) => {
                    this.loadPost();
                    this.newComment = {};
                },
                (error) => this.commentErrors = error.data.message
            );
        }

        removeComment(id) {
            this.commentService.deleteComment(id).then(
                (success) => this.loadPost(),
                (error) => this.commentErrors = error.data.message
            );

        }
    }

    angular.module("app").controller('postController', PostController);
}