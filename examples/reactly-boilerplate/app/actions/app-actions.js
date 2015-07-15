/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

import Reactly from 'reactly';
import Constants from '../constants';

class AppActions extends Reactly.Actions {

    incrementCount(amount) {
        this.dispatchAction(Constants.Actions.INCREMENT_COUNT, {amount: amount});
    }

}

export default AppActions;
