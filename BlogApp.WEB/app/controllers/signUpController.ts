'use strict';

module app {

    export class SignUpController {
        static $inject = ['$http', 'appTitleService', 'authService', '$timeout', '$location'];

        registration = {};
        message = '';
        savedSuccessfully = false;

        constructor(
            private $http: ng.IHttpService,
            private appTitleService: app.Services.AppTitleService,
            private authService: app.Services.AuthService,
            private $timeout: ng.ITimeoutService,
            private $location: ng.ILocationService
            ) {
            appTitleService.title = "Sign Up";
        }

        signUp() {
            this.authService.saveRegistration(this.registration).then(
                (response) => { 
                    this.savedSuccessfully = true;
                    this.message = "You have successfully register a new account."
                        + "You will be redirected to login page in few seconds.";
                    this.registration = {};
                    this.startTimer();
                },
                (response) => {
                    var errors = [];
                    for (var key in response.data.modelState)
                        for (var i = 0; i < response.data.modelState[key].length; i++)
                            errors.push(response.data.modelState[key][i] + " ");
                
                    this.message = "Failed to register user due to: " + errors.join(' ');
                });
        }

        startTimer() {
            var timer = this.$timeout(() =>  {
                this.$timeout.cancel(timer);
                this.$location.path('/Account/Login');
            }, 4000);
        }
    }

    angular.module('app').controller('signUpController', SignUpController);
}
