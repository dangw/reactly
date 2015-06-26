'use strict';

var Reactly = require('reactly');

var Constants = require('../constants');

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

module.exports = AppStore;
