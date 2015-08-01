/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import Reactly from 'reactly';
import Constants from '../constants';

export default class AppStore extends Reactly.Store {

    static get name() {
        return "AppStore";
    }

    static get actionListeners() {
        return {
            onIncrementCount: [Constants.Actions.INCREMENT_COUNT]
        }
    }

    initialize() {
        this.state = {
            count: 0
        };
    }

    getCount() {
        return this.state.count;
    }

    onIncrementCount(action) {
        this.state.count += action.amount;
        this.emitChange();
    }

}
