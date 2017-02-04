'use strict';

module app {

    export class BlogController {
        static $inject = ['$location', '$scope', '$rootScope', 'blogService', '$http'];

        mySort: string;
        sortUnsort: string;
        requestError = [];
        blogs = [];

        constructor(private $location: ng.ILocationService, private $scope, 
            private $rootScope, private blogService: app.Services.BlogService, private $http: ng.IHttpService) {
            this.loadBlogs();
            this.mySort = undefined;
            this.sortUnsort = "Sort";
        }

        loadBlogs() {
            this.blogService.getBlogs()
                .then(
                (response) => this.blogs = response.data,
                (error) => this.requestError = error.data );
        }

        sort() {
            if (this.sortUnsort == "Sort") {
                this.sortUnsort = "Unsort";
                this.mySort = "name";
            }
            else {
                this.sortUnsort = "Sort";
                this.mySort = undefined;
            }
        }

        goToBlogWithId(id, username) {
            this.$location.path('/Blog/' + id + '/' + username);

        }

        goToAuthorWithId(id, event : Event) {
            event.stopPropagation();
            this.$location.path('/User/' + id);
        }
    }

    angular.module("app").controller('blogController', BlogController);
}


