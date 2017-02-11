"use strict";

module app {
    export class MyBlogController {

        static $inject = ['$location', 'blogService', '$routeParams']
        constructor(private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService,
            private blogservice: app.Services.BlogService) {
        }


    }

    angular.module("app").controller('myBlogController', MyBlogController);
}