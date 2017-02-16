"use strict";

module app.Services {

    export class CommentService {
        static $inject = ["$http"];

        serviceBase = "http://localhost:60110/api/comment/";

        constructor(private $http: ng.IHttpService) { }

        saveComment(comment): ng.IPromise<any> {
            return this.$http.post(this.serviceBase, comment); 
        }

        deleteComment(id): ng.IPromise<any> {
            return this.$http.delete(this.serviceBase + id);
        }

    }

    angular.module("app").service('commentService', CommentService);
}