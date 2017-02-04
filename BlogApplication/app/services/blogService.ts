'use strict';

module app.Services {
    export class BlogService {
        static $inject = ["$q", "$resource", "$http"];

        constructor(private $q: ng.IQService,
            private $resource: ng.resource.IResourceService,
            private $http: ng.IHttpService) {

        }

        getBlogs(): ng.IPromise<any> {
            return this.$http.get("api/blog/getBlogs");
        }

        getBlog(id) {
            return this.$http.get('/api/blog/getAllBlogsPosts/' + id);
        }

    }

    angular.module('app').service("blogService", BlogService);
}