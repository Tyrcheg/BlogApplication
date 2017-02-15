"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var CommentService = (function () {
            function CommentService($http) {
                this.$http = $http;
            }
            CommentService.prototype.saveComment = function (comment) {
                return this.$http.post("http://localhost:60110/api/comments/", comment);
            };
            CommentService.prototype.deleteComment = function (id) {
                return this.$http.delete("http://localhost:60110/api/comments/" + id);
            };
            CommentService.$inject = ["$http"];
            return CommentService;
        }());
        Services.CommentService = CommentService;
        angular.module("app").service('commentService', CommentService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
