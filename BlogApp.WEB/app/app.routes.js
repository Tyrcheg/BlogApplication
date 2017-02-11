'use strict';
angular.module('app').config(['$routeProvider',
    function routes($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Blog', {
            templateUrl: '/app/views/index.html', controller: 'indexController'
        })
            .when('/Blog/Index', {
            templateUrl: '~/app/views/blog.html', controller: 'blogController'
        })
            .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
]);
//# sourceMappingURL=app.routes.js.map