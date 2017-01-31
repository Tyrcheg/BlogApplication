module app {
    class Config {
        constructor() {

        }
    }

    Config.$inject = [];
    var app = angular.module('app', []);
    app.config(Config);
}