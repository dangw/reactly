/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

var EventEmitter = require('eventemitter3');

var Utils = require('./utils');

class ReactlyStore extends EventEmitter {

    constructor(dispatcher) {
        super();
        this._actionMap = Utils.mapFromListeners(this.constructor.actionListeners);
        dispatcher.register((action) => {
            this.handleAction(action)
        });
        if (this.initialize) {
            this.initialize();
        }
    }

    addChangeListener(callback, context) {
        this.on(this.constructor.name, callback, context);
    }

    removeChangeListener(callback, context) {
        this.removeListener(this.constructor.name, callback, context);
    }

    emitChange() {
        this.emit(this.constructor.name);
    }

    handleAction(action) {
        if (this._actionMap[action.actionType] && this[this._actionMap[action.actionType]]) {
            this[this._actionMap[action.actionType]](action);
        }
    }

}

module.exports = ReactlyStore;
