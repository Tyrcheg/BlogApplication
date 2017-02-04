'use strict';

module app {

    export class IndexController {
        static $inject = ['$location', '$scope', '$rootScope'];

        constructor(private $location: ng.ILocationService,
            private $scope: ng.IScope, private $rootScope) {
        }

        pageTitle = "Blog Application";

        changeTitle(name) {
            this.pageTitle = name;
        }
        /* authentication = new Authentication(); */
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

class Authentication {
    isAuth: boolean = true;
    userName: string = "Arthur";

    constructor() { }
}