/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

import './sub-module-route.less';

import React from 'react';
import Reactly from 'reactly';
import Stores from './stores';
import Actions from './actions';
import AppStores from '../../stores';
import AppActions from '../../actions';

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
                <div id="sub-module-route-content">
                    <div className="sub-module-route-text">
                        The sub module route accesses the app store and actions which are persisted through
                        route transitions. The count below is the same as the app route and modifications will be
                        reflected in the app route.
                    </div>
                    <div className="sub-module-route-text">getStore(App.Store).getCount() = {this.state.count}</div>
                    <div className="sub-module-route-button" onClick={event => {this.handleUpdateClick()}}>
                        getActions(Actions.App).incrementCount(2)
                    </div>
                    <div className="sub-module-route-text">
                        The sub module route provides it's own store that has a random value and handles an action
                        to randomize value. The random value is between 0 and the app store counter, demonstrating
                        stores accessing other stores. The sub module store and actions are available to components in
                        this route. The lifetime of the store is bound to the module, so navigating to the app route
                        then back to the sub module route will reset the sub module store since the sub module was
                        unmounted.
                    </div>
                    <div className="sub-module-route-text">getStore(App.SubModule).getValue() = {this.state.value}</div>
                    <div className="sub-module-route-button" onClick={event => {this.handleRandomClick()}}>
                        getActions(Actions.SubModule).randomize()
                    </div>
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

export default SubModuleRoute;
