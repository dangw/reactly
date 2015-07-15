/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

import Reactly from 'reactly';
import Constants from '../constants';

class AppStore extends Reactly.Store {

    initialize() {
        this.state = {
            count: 0
        }
    }

    getCount() {
        return this.state.count;
    }

    onIncrementCount(action) {
        this.state.count += action.amount;
        this.emitChange();
    }

}

AppStore.actionListeners = {
    onIncrementCount: [Constants.Actions.INCREMENT_COUNT]
};

export default AppStore;
