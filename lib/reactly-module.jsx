/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

var React = require('react');
var Dispatcher = require('flux').Dispatcher;

var Utils = require('./utils.jsx');

class ReactlyModule extends React.Component {

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
        this._stores = Utils.createDispatcherItems(this.context.stores, this.constructor.stores, this._dispatcher);
        this._actions = Utils.createDispatcherItems(this.context.actions, this.constructor.actions, this._dispatcher);
        Utils.addChangeListeners(this, this._stores, this.constructor.storeListeners);
    }

    componentWillUnmount() {
        Utils.removeChangeListeners(this, this._stores, this.constructor.storeListeners);
        this._dispatcher = null;
        this._stores = null;
        this._actions = null;
    }

}

ReactlyModule.contextTypes = {
    dispatcher: React.PropTypes.object,
    stores: React.PropTypes.object,
    actions: React.PropTypes.object
};

ReactlyModule.childContextTypes = {
    dispatcher: React.PropTypes.object.isRequired,
    stores: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

module.exports = ReactlyModule;
