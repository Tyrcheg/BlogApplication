'use strict';
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
            BlogService.prototype.getBlogs = function () {
                return this.$http.get("api/blog/getBlogs");
            };
            BlogService.prototype.getBlog = function (id) {
                return this.$http.get('/api/blog/getAllBlogsPosts/' + id);
            };
            BlogService.$inject = ["$q", "$resource", "$http"];
            return BlogService;
        }());
        Services.BlogService = BlogService;
        angular.module('app').service("blogService", BlogService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=blogService.js.map