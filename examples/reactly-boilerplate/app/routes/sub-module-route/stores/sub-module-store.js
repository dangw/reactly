/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

import Reactly from 'reactly';
import Constants from '../constants/index';
import AppStores from '../../../stores/index';

class SubModuleStore extends Reactly.Store {

    initialize() {
        this.state = {
            value: 0
        }
    }

    getValue() {
        return this.state.value;
    }

    onRandomize(action) {
        this.state.value = Math.random() * this.getStore(AppStores.App).getCount();
        this.emitChange();
    }

}

SubModuleStore.actionListeners = {
    onRandomize: [Constants.Actions.RANDOMIZE]
};

export default SubModuleStore;
