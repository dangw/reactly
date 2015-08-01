/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import AppRoute from './app-route';
import SubModuleRoute from './sub-module-route';

export default class Routes {

    static get App() {
        return AppRoute;
    }

    static get SubModule() {
        return SubModuleRoute;
    }

}
