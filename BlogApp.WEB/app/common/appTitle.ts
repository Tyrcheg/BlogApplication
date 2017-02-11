"use strict";

module app.Services {
    export interface IAppTitleService {
        title: string;
    }

    export class AppTitleService implements IAppTitleService {
        title: string;
    }

    angular.module('app').service('appTitleService', AppTitleService);
}
