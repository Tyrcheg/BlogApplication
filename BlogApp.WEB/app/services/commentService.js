"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var CommentService = (function () {
            function CommentService($http) {
                this.$http = $http;
                this.serviceBase = "http://localhost:60110/api/comment/";
            }
            CommentService.prototype.saveComment = function (comment) {
                return this.$http.post(this.serviceBase, comment);
            };
            CommentService.prototype.deleteComment = function (id) {
                return this.$http.delete(this.serviceBase + id);
            };
            CommentService.$inject = ["$http"];
            return CommentService;
        }());
        Services.CommentService = CommentService;
        angular.module("app").service('commentService', CommentService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=commentService.js.map