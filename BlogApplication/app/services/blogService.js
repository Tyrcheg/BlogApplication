'use strict';
var app;
(function (app) {
    var Services;
    (function (Services) {
        var BlogService = (function () {
            function BlogService($q, $http) {
                this.$q = $q;
                this.$http = $http;
            }
            BlogService.prototype.getBlogs = function () {
                return this.$http.get("api/blog/getPosts");
            };
            BlogService.$inject = ["$q", "$http"];
            return BlogService;
        }());
        Services.BlogService = BlogService;
        angular.module('app').service("blogService", BlogService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=blogService.js.map