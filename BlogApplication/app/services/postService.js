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
                return this.$http.post("api/comments/post", comment); //,JSON.stringify(comment),
                //    {
                //        headers: {
                //            'Content-Type': 'application/json'
                //        }
                //    });
            };
            PostService.prototype.deleteComment = function (id) {
                return this.$http.delete("api/comments/delete/" + id);
            };
            PostService.$inject = ["$q", "$resource", "$http"];
            return PostService;
        }());
        Services.PostService = PostService;
        angular.module('app').service('postService', PostService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=postService.js.map