"use strict";

module app {

    interface IRouteParams extends ng.route.IRouteParamsService {
        blogId: number;
        userName: string;
    }

    export class SingleBlogController {
        static $inject = ['$scope', 'blogService', '$http', '$routeParams']

        username: string;
        blogId: number;

        constructor(private $routeParams: IRouteParams, private $scope: ng.IScope,
            private blogservice: app.Services.BlogService, private $http: ng.IHttpService) {
            //this.blogId = $routeParams.blogId;
            //this.username = $routeParams.userName;
            console.log($routeParams.blogId);
            console.log($routeParams.userName);
        }

        getParams() {
            this.blogId = this.$routeParams.blogId;
            this.username = this.$routeParams.userName;
            console.log(this.$routeParams);
            console.log(this.blogId + " " + this.username);
        }
    }



    angular.module("app").controller('singleBlogController', SingleBlogController);
}