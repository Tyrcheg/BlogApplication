"use strict";

module app {
    export class MyBlogController {

        static $inject = ['$location', '$scope', 'blogService', '$http', '$routeParams']
        constructor(private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService,
            private $http,
            private $scope,
            private blogservice: app.Services.BlogService) {
        }


    }

    angular.module("app").controller('myBlogController', MyBlogController);
}