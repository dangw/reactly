/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

require('./sub-module-route.less');

var React = require('react');
var Reactly = require('reactly');

var Stores = require('./stores');
var Actions = require('./actions');

var AppStores = require('../../stores');
var AppActions = require('../../actions');

class SubModuleRoute extends Reactly.Module {

    onStoreChange() {
        this.setState({
            value: this.getStore(Stores.SubModule).getValue(),
            count: this.getStore(AppStores.App).getCount()
        });
    }

    handleUpdateClick() {
        this.getActions(AppActions.App).incrementCount(2);
    }

    handleRandomClick() {
        this.getActions(Actions.SubModule).randomize();
    }

    render() {
        return (
            <div id="sub-module-route">
                <div>
                    <button onClick={event => {this.handleUpdateClick()}}>
                        update
                    </button>
                    {this.state.count}
                </div>
                <div>
                    <button onClick={event => {this.handleRandomClick()}}>
                        random
                    </button>
                    {this.state.value}
                </div>
            </div>
        );
    }

}

SubModuleRoute.stores = [Stores.SubModule];
SubModuleRoute.actions = [Actions.SubModule];

SubModuleRoute.storeListeners = {
    onStoreChange: [AppStores.App, Stores.SubModule]
};

module.exports = SubModuleRoute;
