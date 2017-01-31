'use strict';

module app.Services {
    export class BlogService {
        static $inject = ["$q", "$http"];
        constructor(private $q: ng.IQService,
            private $http: ng.IHttpService)
        {       }

        getBlogs(): ng.IPromise<any> {
            return this.$http.get("api/blog/getPosts");
        }
    }

    angular.module('app').service("blogService", BlogService);
}