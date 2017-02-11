'use strict';

module app {   
    var app = angular.module('app', ['ngRoute', 'ngResource']);

    app.config(function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/blogs.html', controller: 'blogController',
                controllerAs: "vm"
            })
            .when('/MyBlog', {
                templateUrl: 'app/templates/myBlog.html', controller: 'blogController',
                controllerAs: "vm"
            })
            .when('/Blog/:blogId/:userName', {
                templateUrl: 'app/templates/blog.html', controller: 'singleBlogController',
                controllerAs: "vm"
            })
            .when('/Post/:postId', {
                templateUrl: 'app/templates/post.html', controller: 'postController',
                controllerAs: "vm"
            })
            .when('/User/:userId', {
                templateUrl: 'app/templates/user.html', controller: 'userController',
                controllerAs: "vm"
            })
            .otherwise({
               redirectTo: '/'
            }) 
            ;

        $locationProvider.html5Mode(true);
    });
}