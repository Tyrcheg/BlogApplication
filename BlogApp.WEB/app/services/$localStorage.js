"use strict";
var app;
(function (app) {
    var Factories;
    (function (Factories) {
        var LocalStorage = (function () {
            function LocalStorage() {
            }
            LocalStorage.prototype.set = function (key, value) {
                localStorage[key] = value;
            };
            LocalStorage.prototype.get = function (key) {
                return localStorage[key] || false;
            };
            LocalStorage.prototype.setObject = function (key, value) {
                localStorage[key] = JSON.stringify(value);
            };
            LocalStorage.prototype.getObject = function (key) {
                if (localStorage[key] != undefined)
                    return JSON.parse(localStorage[key]);
                return false;
            };
            LocalStorage.prototype.remove = function (key) { localStorage.removeItem(key); };
            LocalStorage.prototype.clear = function () { localStorage.clear(); };
            LocalStorage.factory = function () {
                return function () { return new LocalStorage(); };
            };
            LocalStorage.$inject = [];
            return LocalStorage;
        }());
        Factories.LocalStorage = LocalStorage;
        angular.module('app').factory("$localStorage", LocalStorage.factory());
    })(Factories = app.Factories || (app.Factories = {}));
})(app || (app = {}));
//# sourceMappingURL=$localStorage.js.map