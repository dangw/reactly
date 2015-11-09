/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import React from 'react';
import Utils from './utils';

export default class ReactlyComponent extends React.Component {

    static get contextTypes() {
        return {
            stores: React.PropTypes.object.isRequired,
            actions: React.PropTypes.object.isRequired
        };
    }

    getStore(Store) {
        return this.context.stores[Utils.getName(Store)];
    }

    getActions(Actions) {
        return this.context.actions[Utils.getName(Actions)];
    }

    componentWillMount() {
        Utils.addChangeListeners(this, this.context.stores, this.constructor.storeListeners);
    }

    componentWillUnmount() {
        Utils.removeChangeListeners(this, this.context.stores, this.constructor.storeListeners);
    }

}
