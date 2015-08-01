/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import './app-route.less';

import React from 'react';
import Reactly from 'reactly';
import Stores from '../../stores/index';
import Actions from '../../actions/index';

export default class HomeRoute extends Reactly.Component {

    static get contextTypes() {
        return Reactly.Component.contextTypes;
    }

    static get storeListeners() {
        return {
            onAppStoreChange: [Stores.App]
        }
    }

    onAppStoreChange() {
        this.setState({
            count: this.getStore(Stores.App).getCount()
        });
    }

    handleUpdateClick() {
        this.getActions(Actions.App).incrementCount(1);
    }

    render() {
        return (
            <div id="app-route">
                <div id="app-route-content">
                    <div className="app-route-text">
                        This app provides a store that has a counter and handles an action
                        to increment the counter by a passed value. The store and actions are available to all routes
                        and components. Any modifications to the store will persist for the lifetime of the app.
                    </div>
                    <div className="app-route-text">getStore(App.Store).getCount() = {this.state.count}</div>
                    <div className="app-route-button" onClick={event => {this.handleUpdateClick()}}>
                        getActions(Actions.App).incrementCount(1)
                    </div>
                </div>
            </div>
        );
    }

}
