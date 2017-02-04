"use strict";
module app.Services {

    export class PostService {
        static $inject = ["$q", "$resource", "$http"];

        constructor(private $q: ng.IQService,
            private $resource: ng.resource.IResourceService,
            private $http: ng.IHttpService) {

        }

        getPost(id: number): ng.IPromise<any> {
            return this.$http.get("api/post/getPost/" + id);
        }

        saveComment(comment) {

        }
        
    }
    angular.module('app').service('postService', PostService);
}