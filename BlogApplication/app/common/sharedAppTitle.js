"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AppTitle = (function () {
            function AppTitle($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.title = "";
            }
            AppTitle.prototype.change = function (newTitle) {
                this.title = newTitle;
            };
            AppTitle.prototype.get = function () {
                return this.title;
            };
            AppTitle.$inject = ['$scope', '$rootScope'];
            return AppTitle;
        }());
        Services.AppTitle = AppTitle;
        angular.module('app').factory('appTitle', AppTitle);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//angular.module('app').factory('appTitle', function () {
//    var title = {};
//    title.text = "";
//    title.change = function (newTitle) {
//        title.text = newTitle;
//    }
//    return title;
//});
