'use strict';
var app;
(function (app_1) {
    var app = angular.module('app', ['ngRoute', 'ngResource']);
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'app/templates/blogs.html', controller: 'blogController'
        })
            .when('/MyBlog', {
            templateUrl: 'app/templates/myBlog.html', controller: 'blogController'
        })
            .when('/Blog/:blogId/:userName', {
            templateUrl: 'app/templates/blog.html', controller: 'singleBlogController'
        })
            .when('/Post/:postId', {
            templateUrl: 'app/templates/post.html', controller: 'postController'
        })
            .when('/User/:userId', {
            templateUrl: 'app/templates/user.html', controller: 'userController'
        })
            .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map