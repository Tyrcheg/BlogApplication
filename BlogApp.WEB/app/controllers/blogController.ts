'use strict';

module app {

    export class BlogController {
        static $inject = ['$rootScope', '$scope', '$http', '$location', 'blogService'];

        mySort: string;
        sortUnsort: string;
        requestError = [];
        blogs = [];

        constructor(private $rootScope,
            private $scope, 
            private $http: ng.IHttpService,
            private $location: ng.ILocationService,
            private blogService: app.Services.BlogService
            ) {
            this.loadBlogs();
            this.mySort = undefined;
            this.sortUnsort = "Sort";
        }

        loadBlogs() {
            this.blogService.getAllBlogs()
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


