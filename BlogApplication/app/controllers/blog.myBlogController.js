"use strict";
var app;
(function (app) {
    var MyBlogController = (function () {
        function MyBlogController($routeParams, $http, $scope, blogservice) {
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
//# sourceMappingURL=blog.myBlogController.js.map