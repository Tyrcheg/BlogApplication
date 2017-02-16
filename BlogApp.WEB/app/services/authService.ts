"use strict";

module app.Services {

    export class AuthService {

        static $inject = ['$http', '$q', '$localStorage'];
        serviceBase = 'http://localhost:60110/';

        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $localStorage: app.Factories.LocalStorage) {

        }

        authentication = { isAuth: false, userName: "" };


        saveRegistration(registration): ng.IPromise<any> {
            this.logout();
            return this.$http.post(this.serviceBase + "api/account/register", registration);
        }


        logout() {
            this.$localStorage.remove('authorizationData');

            this.authentication.isAuth = false;
            this.authentication.userName = "";
        }

        fillAuthData() {
            var authData = this.$localStorage.getObject('authorizationData');
            if (authData) {
                this.authentication.isAuth = true;
                this.authentication.userName = authData.userName;
            }
        }

        login(loginData): ng.IPromise<any> {
            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            var deferred = this.$q.defer();

            this.$http.post(this.serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })

                .then((response) => {

                    this.$localStorage.setObject('authorizationData', { token: response, userName: loginData.userName });

                    this.authentication.isAuth = true;
                    this.authentication.userName = loginData.userName;

                    deferred.resolve(response);

                }, (reason) => {
                    this.logout();
                    deferred.reject(reason);
                });

            return deferred.promise;
        }
    }

    angular.module("app").service('authService', AuthService);
}








//var data = "grant_type=password&username=" + loginData.userName
    //    + "&password=" + loginData.password;


    //return this.$http.post(this.serviceBase + 'token', data,
    //    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    //    .then(
    //    (response) => {
    //        this.$localStorage.setObject('authorizationData', { token: response, userName: loginData.userName });

    //        this.authentication.isAuth = true;
    //        this.authentication.userName = loginData.userName;
    //    },
    //    (error) => {
    //        this.logout();
    //        console.log(error);
    //    }
    //    );
