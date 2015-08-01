/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import Reactly from 'reactly';
import Constants from '../constants';

export default class AppActions extends Reactly.Actions {

    static get name() {
        return "AppActions";
    }

    incrementCount(amount) {
        this.dispatchAction(Constants.Actions.INCREMENT_COUNT, {amount: amount});
    }

}
