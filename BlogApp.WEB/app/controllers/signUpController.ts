'use strict';

module app {

    export class SignUpController {
        static $inject = ['$http', 'appTitleService'];

        registration = {};
        message = "";
        savedSuccessfully = false;

        constructor(
            private $http: ng.IHttpService,
            private appTitleService: app.Services.AppTitleService) {
            appTitleService.title = "Sign Up";
        }

        signUp(registration) {
            this.$http.post("http://localhost:60110/api/account/register", registration)
                .then(
                (response) =>
                { this.message = response.statusText; this.savedSuccessfully = true; },
                (error) =>
                { this.message = error.data; this.savedSuccessfully = true; });
        }
    }

    angular.module('app').controller('signUpController', SignUpController);
}
