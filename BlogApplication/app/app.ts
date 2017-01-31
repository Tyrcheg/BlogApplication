'use strict';

module app {   
    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
        $routeProvider
            .when('/Blog/Index', {
                templateUrl: 'app/views/index.html', controller: 'indexController'
            })
            .when('/Blog/Index2', {
                templateUrl: 'app/views/blog.html', controller: 'blogController'
            })

            /* .otherwise({
               redirectTo: '/'
            }) */
            ;

        $locationProvider.html5Mode(true);
    });
}