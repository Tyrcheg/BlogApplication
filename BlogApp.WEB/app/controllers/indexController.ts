'use strict';

module app {

    export class IndexController {
        static $inject = ['$rootScope', 'appTitleService', '$localStorage'];
        date;

        constructor( private $rootScope: ng.IRootScopeService,
            private appTitleService: app.Services.AppTitleService,
            private $localStorage: app.Factories.LocalStorage) {


            this.date = Date.now();

            $rootScope.$on("$routeChangeSuccess", (e, current) => 
                (current.loadedTemplateUrl == "app/templates/blogs.html") ?
                    this.appTitleService.title = "Blog Application" :
                (current.loadedTemplateUrl == "app/templates/myBlog.html") ?
                        this.appTitleService.title = "My Blog" : null);

        }
        
        authentication = { isAuth: true, userName: "Tyrik" };


        logOut() {
            this.authentication.isAuth = false;
        }

        logIn() {
            this.authentication.isAuth = true;
        }
    }

    angular.module("app").controller('indexController', IndexController);
}
