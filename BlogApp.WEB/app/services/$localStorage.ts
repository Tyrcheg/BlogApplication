"use strict";

module app.Factories {

    export class LocalStorage {
        static $inject = [];

        constructor() {}

        set(key : string, value ) {
            localStorage[key] = value;
        }

        get(key: string) {
            return localStorage[key] || false;
        }

        setObject(key : string, value : any) {
            localStorage[key] = JSON.stringify(value);
        }

        getObject(key : string) {
            if (localStorage[key] != undefined)
                return JSON.parse(localStorage[key]);
            return false;
        }

        remove(key : string) { localStorage.removeItem(key); }

        clear() { localStorage.clear(); }

        static factory() {
            return () => new LocalStorage();
        }
    }

    angular.module('app').factory("$localStorage", LocalStorage.factory());
}