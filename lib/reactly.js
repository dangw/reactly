/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

var ReactlyStore = require('./reactly-store');
var ReactlyActions = require('./reactly-actions');
var ReactlyComponent = require('./reactly-component');
var ReactlyModule = require('./reactly-module');

class Reactly {
}

Reactly.Store = ReactlyStore;
Reactly.Actions = ReactlyActions;
Reactly.Component = ReactlyComponent;
Reactly.Module = ReactlyModule;

module.exports = Reactly;
