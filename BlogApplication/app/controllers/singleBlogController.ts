"use strict";

module app {

    interface IRouteParams extends ng.route.IRouteParamsService {
        blogId: number;
        userName: string;
    }

    export class SingleBlogController {
        static $inject = ['$location', '$routeParams', '$scope',
            'blogService', '$http', 'appTitleService']

        username: string;
        blogId: number;
        posts = [];
        errors = [];

        constructor(private $location: ng.ILocationService, private $routeParams: IRouteParams,
            private $scope: ng.IScope,
            private blogservice: app.Services.BlogService,
            private $http: ng.IHttpService,
            private appTitleService: app.Services.AppTitleService
            ) {

            this.blogId = $routeParams.blogId;
            this.appTitleService.setTitle($routeParams.userName + "'s blog");

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