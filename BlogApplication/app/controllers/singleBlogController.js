"use strict";
var app;
(function (app) {
    var SingleBlogController = (function () {
        function SingleBlogController($routeParams, $scope, blogservice, $http) {
            this.$routeParams = $routeParams;
            this.$scope = $scope;
            this.blogservice = blogservice;
            this.$http = $http;
            //this.blogId = $routeParams.blogId;
            //this.username = $routeParams.userName;
            console.log($routeParams.blogId);
            console.log($routeParams.userName);
        }
        SingleBlogController.prototype.getParams = function () {
            this.blogId = this.$routeParams.blogId;
            this.username = this.$routeParams.userName;
            console.log(this.$routeParams);
            console.log(this.blogId + " " + this.username);
        };
        SingleBlogController.$inject = ['$scope', 'blogService', '$http', '$routeParams'];
        return SingleBlogController;
    }());
    app.SingleBlogController = SingleBlogController;
    angular.module("app").controller('singleBlogController', SingleBlogController);
})(app || (app = {}));
//# sourceMappingURL=singleBlogController.js.map