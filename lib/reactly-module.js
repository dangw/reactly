/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import React from 'react';
import {Dispatcher} from 'flux';
import objectAssign from 'object-assign';
import Utils from './utils';

export default class ReactlyModule extends React.Component {

    static get contextTypes() {
        return {
            dispatcher: React.PropTypes.object,
                stores: React.PropTypes.object,
            actions: React.PropTypes.object
        };
    }

    static get childContextTypes() {
        return {
            dispatcher: React.PropTypes.object.isRequired,
                stores: React.PropTypes.object.isRequired,
            actions: React.PropTypes.object.isRequired
        };
    }

    getStore(Store) {
        return this._stores[Store.name];
    }

    getActions(Actions) {
        return this._actions[Actions.name];
    }

    getChildContext() {
        return {
            dispatcher: this._dispatcher,
            stores: this._stores,
            actions: this._actions
        }
    }

    componentWillMount() {
        this._dispatcher = this.context.dispatcher || new Dispatcher();

        this._stores = objectAssign({}, this.context.stores);
        this.constructor.stores.forEach(Store => {
            this._stores[Store.name] = new Store(this._dispatcher, this);
        });

        this._actions = objectAssign({}, this.context.actions);
        this.constructor.actions.forEach(Actions => {
            this._actions[Actions.name] = new Actions(this._dispatcher);
        });

        Utils.addChangeListeners(this, this._stores, this.constructor.storeListeners);
    }

    componentWillUnmount() {
        Utils.removeChangeListeners(this, this._stores, this.constructor.storeListeners);

        this.constructor.stores.forEach(item => {
            this._stores[item.name].unregister();
        });

        this._dispatcher = null;
        this._stores = null;
        this._actions = null;
    }

}
