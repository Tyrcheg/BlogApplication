'use strict';
var app;
(function (app_1) {
    var app = angular.module('app', ['ngRoute', 'ngResource',
        'angular-loading-bar', 'ui.bootstrap']);
    app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
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
                .when('/Account/Login', {
                templateUrl: "/app/templates/login.html", controller: "loginController",
                controllerAs: "lnCtrl"
            })
                .when('/Account/SignUp', {
                templateUrl: "/app/templates/signup.html", controller: "signUpController",
                controllerAs: "suCtrl"
            })
                .otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode(true);
        }]);
    //app.config(['$httpProvider', function ($httpProvider) {
    //    $httpProvider.interceptors.push('authInterceptorService');
    //}]);
    app.run(function (authService) {
        authService.fillAuthData();
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map