"use strict";
module app {

    interface IRouteParams extends ng.route.IRouteParamsService {
        postId: number;
    }

    export class PostController {
        static $inject = ['$location', '$routeParams', '$scope',
            'postService', '$http', 'appTitleService'];

        post;
        postId: number;
        errors = [];
        commentSaveErrors = [];
        newComment = {};

        constructor(private $location: ng.ILocationService,
            private $routeParams: IRouteParams,
            private $scope: ng.IScope,
            private postService: app.Services.PostService,
            private $http: ng.IHttpService,
            private appTitleService: app.Services.AppTitleService) {

            this.postId = $routeParams.postId;
            this.loadPost();
        }

        loadPost() {
            this.postService.getPost(this.postId)
                .then(
                (response) => { this.post = response.data; this.appTitleService.setTitle(this.post.title); },
                (error) => this.errors = error.data);
        }

        saveComment(comment) {
            this.newComment = {
                userName: "Artem",
                text: comment.text,
                postId: this.postId,
                dateCreated: Date.now()
            };

            this.postService.saveComment(this.newComment)
                .then(
                (success) => {
                    this.loadPost();
                    this.newComment = {};
                },
                (error) => this.commentSaveErrors = error.message);
        }

        removeComment(id) {
            this.postService.deleteComment(id).then(
                (success) => this.loadPost(),
                (error) => this.errors = error.data);

        }

    }

    angular.module("app").controller('postController', PostController);
}