"use strict";

module app.Services {

    export class CommentService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) { }

        saveComment(comment): ng.IPromise<any> {
            return this.$http.post("http://localhost:60110/api/comments/", comment); 
        }

        deleteComment(id): ng.IPromise<any> {
            return this.$http.delete("http://localhost:60110/api/comments/" + id);
        }

    }

    angular.module("app").service('commentService', CommentService);
}