/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

var React = require('react');

var Utils = require('./utils');

class ReactlyComponent extends React.Component {

    getStore(Store) {
        return this.context.stores[Store.name];
    }

    getActions(Actions) {
        return this.context.actions[Actions.name];
    }

    componentWillMount() {
        Utils.addChangeListeners(this, this.context.stores, this.constructor.storeListeners);
    }

    componentWillUnmount() {
        Utils.removeChangeListeners(this, this.context.stores, this.constructor.storeListeners);
    }

}

ReactlyComponent.contextTypes = {
    stores: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

module.exports = ReactlyComponent;
