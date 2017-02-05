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

        saveComment(comment): ng.IPromise<any> {
            return this.$http.post("api/comments/post", comment); //,JSON.stringify(comment),
            //    {
            //        headers: {
            //            'Content-Type': 'application/json'
            //        }
            //    });
            
        }

        deleteComment(id): ng.IPromise<any> {
            return this.$http.delete("api/comments/delete/" + id);
        }
        
    }
    angular.module('app').service('postService', PostService);
}