"use strict";

module app.Services {

    export class AuthService {

        static $inject = ['$http', '$localStorage'];

        constructor(
            private $http: ng.IHttpService,
            private $localStorage: app.Factories.LocalStorage) {

        }

        authentication = { isAuth: false, userName: "" };

        login(email, password) {
            
        }

        

        logout() {

        }


    }
    angular.module("app").service('authService', AuthService);
}