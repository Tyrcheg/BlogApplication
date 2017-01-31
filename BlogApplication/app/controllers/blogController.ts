'use strict';

module app {
    export class BlogController {
        helloWorld: string = "hello world";
        static $inject = ['$location', '$scope', '$rootScope', 'blogService'];

        constructor(private $location: ng.ILocationService, private $scope,
            private $rootScope, private blogService: app.Services.BlogService) {

        }

        helloMessage: string = "hello from blog controller";
    }
    angular.module("app").controller('blogController', BlogController);
}