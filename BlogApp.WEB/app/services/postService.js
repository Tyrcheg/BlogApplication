"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var PostService = (function () {
            function PostService($http) {
                this.$http = $http;
            }
            PostService.prototype.getPost = function (id) {
                return this.$http.get("http://localhost:60110/api/post/getPost/" + id);
            };
            PostService.$inject = ["$http"];
            return PostService;
        }());
        Services.PostService = PostService;
        angular.module('app').service('postService', PostService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
