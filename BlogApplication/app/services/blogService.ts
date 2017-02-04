'use strict';

module app.Services {
    export class BlogService {
        static $inject = ["$q", "$resource", "$http"];

        constructor(private $q: ng.IQService,
            private $resource: ng.resource.IResourceService,
            private $http: ng.IHttpService) {

        }

        getAllBlogs(): ng.IPromise<any> {
            return this.$http.get("api/blog/getBlogs");
        }

        getBlogPosts(id : number) : ng.IPromise<any> {
            return this.$http.get('/api/blog/GetAllBlogsPosts/' + id);
        }

    }

    angular.module('app').service("blogService", BlogService);
}