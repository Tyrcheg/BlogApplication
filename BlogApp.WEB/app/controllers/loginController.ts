'use strict';

module app {

    export class LoginController {
        static $inject = ['$http', '$location', 'appTitleService', 'authService'];
        message = '';

        constructor(
            private $http: ng.IHttpService,
            private $location: ng.ILocationService,
            private appTitleService: app.Services.AppTitleService,
            private authService: app.Services.AuthService
        ) {
            appTitleService.title = "Login";
        }

        loginData = { userName: "", password: "" };

        login() {
            this.authService.login(this.loginData)
                .then(
                (response) => {
                    this.$location.path('/');
                },
                (error) =>
                    this.message = error.data.error_description
                )
        };
    }

    angular.module('app').controller('loginController', LoginController);
}
