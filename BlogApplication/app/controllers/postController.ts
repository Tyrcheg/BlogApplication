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
            this.post.comments.push(
                {
                    dateCreated: Date.now(),
                    userName: "Arthur",
                    text: comment.text
                });
            this.newComment = {};

        }

    }

    angular.module("app").controller('postController', PostController);
}