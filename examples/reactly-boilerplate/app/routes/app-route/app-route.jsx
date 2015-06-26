/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

require('./app-route.less');

var React = require('react');
var Reactly = require('reactly');

var Stores = require('../../stores/index');
var Actions = require('../../actions/index');

class HomeRoute extends Reactly.Component {

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
            <div id="home-route">
                <button onClick={event => {this.handleUpdateClick()}}>
                    update
                </button>
                {this.state.count}
            </div>
        );
    }

}

HomeRoute.storeListeners = {
    onAppStoreChange: [Stores.App]
};

module.exports = HomeRoute;
