/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import ReactlyStore from './reactly-store';
import ReactlyActions from './reactly-actions';
import ReactlyComponent from './reactly-component';
import ReactlyModule from './reactly-module';

export default class Reactly {

    static get Store() {
        return ReactlyStore;
    }

    static get Actions() {
        return ReactlyActions;
    }

    static get Component() {
        return ReactlyComponent;
    }

    static get Module() {
        return ReactlyModule;
    }

}
