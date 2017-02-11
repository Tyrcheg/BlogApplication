"use strict";
module app.Services {

    export class PostService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) { }

        getPost(id: number): ng.IPromise<any> {
            return this.$http.get("http://localhost:60110/api/post/getPost/" + id);
        }
    }
    angular.module('app').service('postService', PostService);
}