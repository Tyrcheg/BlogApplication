"use strict";

module app.Services {

    export class BlogService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        getAllBlogs(): ng.IPromise<any> {
            return this.$http.get("http://localhost:60110/api/blog/getBlogs");
        }

        getBlogPosts(id : number) : ng.IPromise<any> {
            return this.$http.get("http://localhost:60110/api/blog/GetAllBlogsPosts/" + id);
        }

    }

    angular.module('app').service("blogService", BlogService);
}