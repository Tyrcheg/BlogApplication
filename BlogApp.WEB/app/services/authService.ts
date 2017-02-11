"use strict";

module app.Services {

    export class AuthService {

        static $inject = ['$scope', '$http'];

        constructor(private $scope: ng.IScope,
            private $http: ng.IHttpService) { }

        user = null;

        login(email, password) {

        }

        logout() {
            this.user = null;
        }

    }
    angular.module("app").service('authService', AuthService);
}