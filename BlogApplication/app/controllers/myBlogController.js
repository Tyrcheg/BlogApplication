"use strict";
var app;
(function (app) {
    var MyBlogController = (function () {
        function MyBlogController($location, $routeParams, $http, $scope, blogservice) {
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.$http = $http;
            this.$scope = $scope;
            this.blogservice = blogservice;
        }
        MyBlogController.$inject = ['$location', '$scope', 'blogService', '$http', '$routeParams'];
        return MyBlogController;
    }());
    app.MyBlogController = MyBlogController;
    angular.module("app").controller('myBlogController', MyBlogController);
})(app || (app = {}));
//# sourceMappingURL=myBlogController.js.map