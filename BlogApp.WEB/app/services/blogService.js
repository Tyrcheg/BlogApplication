"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var BlogService = (function () {
            function BlogService($q, $resource, $http) {
                this.$q = $q;
                this.$resource = $resource;
                this.$http = $http;
            }
            BlogService.prototype.getAllBlogs = function () {
                // return this.$http.get("api/blog/getBlogs"); 
                return this.$http.get("http://localhost:60110/api/blog/getBlogs");
            };
            BlogService.prototype.getBlogPosts = function (id) {
                // return this.$http.get('/api/blog/GetAllBlogsPosts/' + id);
                return this.$http.get("http://localhost:60110/api/blog/GetAllBlogsPosts/" + id);
            };
            BlogService.$inject = ["$q", "$resource", "$http"];
            return BlogService;
        }());
        Services.BlogService = BlogService;
        angular.module('app').service("blogService", BlogService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
