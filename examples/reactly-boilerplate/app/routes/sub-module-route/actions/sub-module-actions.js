/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

var Reactly = require('reactly');

var Constants = require('../constants');

class SubModuleActions extends Reactly.Actions {

    randomize() {
        this.dispatchAction(Constants.Actions.RANDOMIZE);
    }

}

module.exports = SubModuleActions;
