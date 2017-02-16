"use strict";

module app.Services {
    export class AuthInterceptorService {

        static $inject = ['$q', '$localStorage'];

        constructor(
            private $q: ng.IQService,
            private $localStorage: app.Factories.LocalStorage
        ) {
        }

        request(config) {
            config.headers = config.header || {};

            var authData = this.$localStorage.getObject('authorizationData');
            if (authData)
                config.headers.Authorization = 'Bearer' + authData.token;

            return config;
        }

        responseError(rejection) {
            if (rejection.status === 401)
            {
                //this.$location.path('/login');

                //var $state = $injector.get('$state');
                //$state.transitionTo('login');
            }
            return this.$q.reject(rejection);
        }
    }

    angular.module('app').service("authInterceptorService", AuthInterceptorService);
}