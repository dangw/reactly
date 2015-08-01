/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import Reactly from 'reactly';
import Constants from '../constants';

export default class SubModuleActions extends Reactly.Actions {

    static get id() {
        return "SubModuleActions";
    }

    randomize() {
        this.dispatchAction(Constants.Actions.RANDOMIZE);
    }

}
