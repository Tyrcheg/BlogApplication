"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var PostService = (function () {
            function PostService($q, $resource, $http) {
                this.$q = $q;
                this.$resource = $resource;
                this.$http = $http;
            }
            PostService.prototype.getPost = function (id) {
                return this.$http.get("api/post/getPost/" + id);
            };
            PostService.prototype.saveComment = function (comment) {
            };
            PostService.$inject = ["$q", "$resource", "$http"];
            return PostService;
        }());
        Services.PostService = PostService;
        angular.module('app').service('postService', PostService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
