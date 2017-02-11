"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var AppTitleService = (function () {
            function AppTitleService() {
            }
            return AppTitleService;
        }());
        Services.AppTitleService = AppTitleService;
        angular.module('app').service('appTitleService', AppTitleService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
