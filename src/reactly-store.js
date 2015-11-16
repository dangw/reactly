/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import EventEmitter from 'eventemitter3';
import Utils from './utils';

export default class ReactlyStore extends EventEmitter {

    constructor(dispatcher, module) {
        super();
        this._actionMap = Utils.mapFromListeners(this.constructor.actionListeners);
        this._dispatcher = dispatcher;
        this._dispatchToken = this._dispatcher.register((action) => {
            this.handleAction(action)
        });
        if (this.initialize) {
            this.initialize(module.getChildContext());
        }

        this._module = module;
    }

    unregister() {
        this._dispatcher.unregister(this._dispatchToken);
        this._dispatchToken = null;
        this._module = null;
    }

    getStore(Store) {
        return this._module.getStore(Store);
    }

    getToken() {
        return this._dispatchToken;
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
