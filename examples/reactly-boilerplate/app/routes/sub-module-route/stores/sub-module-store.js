/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import Reactly from 'reactly';
import Constants from '../constants/index';
import AppStores from '../../../stores/index';

export default class SubModuleStore extends Reactly.Store {

    static get actionListeners() {
        return {
            onRandomize: [Constants.Actions.RANDOMIZE]
        };
    }

    initialize() {
        this.state = {
            value: 0
        };
    }

    getValue() {
        return this.state.value;
    }

    onRandomize(action) {
        this.state.value = Math.random() * this.getStore(AppStores.App).getCount();
        this.emitChange();
    }

}
