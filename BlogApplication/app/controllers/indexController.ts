'use strict';

module app {

    export class IndexController {
        static $inject = ['$location', '$scope', '$rootScope', '$route', 'appTitleService'];
        date;

        constructor(private $location: ng.ILocationService,
            private $scope: ng.IScope,
            private $rootScope: ng.IRootScopeService,
            private $route: ng.route.IRoute,
            private appTitleService: app.Services.AppTitleService) {

            this.date = Date.now();

            this.$rootScope.$on("$routeChangeSuccess", (e, current) => 
                (current.loadedTemplateUrl == "app/templates/blogs.html") ?
                    this.appTitleService.setTitle("Blog Application") :
                (current.loadedTemplateUrl == "app/templates/myBlog.html") ?
                    this.appTitleService.setTitle("My Blog") : null );
        }

        /* authentication = new Authentication(); */
        authentication = { isAuth: true, userName: "Tyrik" };

        
        logOut() {
            this.authentication.isAuth = false;
        }

        logIn() {
            this.authentication.isAuth = true;
        }

        onRootChange() {
            console.log(this.$route.template);
        }
    }

    angular.module("app").controller('indexController', IndexController);
}

class Authentication {
    isAuth: boolean = true;
    userName: string = "Arthur";

    constructor() { }
}