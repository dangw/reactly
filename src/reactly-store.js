/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import EventEmitter from 'eventemitter3';
import Utils from './utils';

export default class ReactlyStore extends EventEmitter {

    constructor(dispatcher, context) {
        super();
        this._actionMap = Utils.mapFromListeners(this.constructor.actionListeners);
        this._dispatcher = dispatcher;
        this._dispatchToken = this._dispatcher.register((action) => {
            this.handleAction(action)
        });
        if (this.initialize) {
            this.initialize();
        }

        this._context = context;
    }

    unregister() {
        this._dispatcher.unregister(this._dispatchToken);
        this._dispatchToken = null;
        this._context = null;
    }

    getStore(Store) {
        return this._context.getStore(Store);
    }

    getToken() {
        return this._dispatchToken;
    }

    addChangeListener(callback, context) {
        this.on(this.id, callback, context);
    }

    removeChangeListener(callback, context) {
        this.removeListener(this.id, callback, context);
    }

    emitChange() {
        this.emit(this.id);
    }

    handleAction(action) {
        if (this._actionMap[action.actionType] && this[this._actionMap[action.actionType]]) {
            this[this._actionMap[action.actionType]](action);
        }
    }

}