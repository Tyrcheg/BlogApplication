'use strict';
var app;
(function (app_1) {
    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Blog/Index', {
            templateUrl: 'app/views/index.html', controller: 'indexController'
        })
            .when('/Blog/Index2', {
            templateUrl: 'app/views/blog.html', controller: 'blogController'
        })
            .when('/Index', {
            templateUrl: 'app/views/index.html', controller: 'indexController'
        })
            .when('/Index2', {
            templateUrl: 'app/views/blog.html', controller: 'blogController'
        });
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map