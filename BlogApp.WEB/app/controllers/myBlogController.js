"use strict";
var app;
(function (app) {
    var MyBlogController = (function () {
        function MyBlogController($location, $routeParams, blogservice) {
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.blogservice = blogservice;
        }
        MyBlogController.$inject = ['$location', 'blogService', '$routeParams'];
        return MyBlogController;
    }());
    app.MyBlogController = MyBlogController;
    angular.module("app").controller('myBlogController', MyBlogController);
})(app || (app = {}));
