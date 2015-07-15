/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

import Reactly from 'reactly';

import Constants from '../constants';

class SubModuleActions extends Reactly.Actions {

    randomize() {
        this.dispatchAction(Constants.Actions.RANDOMIZE);
    }

}

export default SubModuleActions;
