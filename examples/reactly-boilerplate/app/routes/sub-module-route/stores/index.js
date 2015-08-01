/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import SubModuleStore from './sub-module-store';

export default class Stores {

    static get SubModule() {
        return SubModuleStore;
    }

}
