"use strict";

module app {

    interface IRouteParams extends ng.route.IRouteParamsService {
        blogId: number;
        userName: string;
    }

    export class SingleBlogController {
        static $inject = ['$location', '$routeParams','blogService', 'appTitleService']

        username: string;
        blogId: number;
        posts = [];
        errors = [];

        constructor(private $location: ng.ILocationService,
            private $routeParams: IRouteParams,
            private blogservice: app.Services.BlogService,
            private appTitleService: app.Services.AppTitleService
            ) {

            this.blogId = $routeParams.blogId;
            this.appTitleService.title = $routeParams.userName + "'s blog";

            this.loadPosts();
        }

        loadPosts() {
            this.blogservice.getBlogPosts(this.blogId)
                .then(
                (response) => this.posts = response.data,
                (error) => this.errors = error.data);
        }

        goToPostWithId(id) {
            this.$location.path('/Post/' + id);
        }
    }

    angular.module("app").controller('singleBlogController', SingleBlogController);
}