'use strict';

module app {

    export class IndexController {
        date;

        static $inject = [
            '$rootScope', 'appTitleService',
            '$localStorage', '$location',
            'authService'];

        constructor(private $rootScope: ng.IRootScopeService,
            private appTitleService: app.Services.AppTitleService,
            private $localStorage: app.Factories.LocalStorage,
            private $location: ng.ILocationService,
            private authService: app.Services.AuthService) {

            this.date = Date.now();
            this.titleChangeConfig();

        }

        authentication = this.authService.authentication;


        logOut() {
            this.authService.logout();
            this.$location.path('/');
        }

        titleChangeConfig() {
            this.$rootScope.$on("$routeChangeSuccess", (e, current) =>
                (current.loadedTemplateUrl == "app/templates/blogs.html") ?
                    this.appTitleService.title = "Blog Application" :
                    (current.loadedTemplateUrl == "app/templates/myBlog.html") ?
                        this.appTitleService.title = "My Blog" : null);
        }

    }

    angular.module("app").controller('indexController', IndexController);
}
