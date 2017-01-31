module app {
    export class IndexController {
        helloWorld: string = "Hello World";
        static $inject = ['$location', '$scope', '$rootScope', 'blogService'];
        constructor(private $location: ng.ILocationService, private $scope, private $rootScope, private blogService: app.Services.BlogService) {

        }
    } angular.module("app").controller('indexController', IndexController);
}