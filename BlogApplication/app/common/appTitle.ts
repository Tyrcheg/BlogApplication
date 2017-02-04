"use strict";

module app.Services {
    export interface IAppTitleService {
        title: string;
        setTitle(name: string);
    }

    export class AppTitleService implements IAppTitleService {
        title: string;

        setTitle(name: string) {
            this.title = name;
        };
    }

    angular.module('app').service('appTitleService', AppTitleService);
}
