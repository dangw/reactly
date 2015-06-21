/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

var ReactlyStore = require('./reactly-store.jsx');
var ReactlyActions = require('./reactly-actions.jsx');
var ReactlyComponent = require('./reactly-component.jsx');
var ReactlyModule = require('./reactly-module.jsx');

class Reactly {
}

Reactly.Store = ReactlyStore;
Reactly.Actions = ReactlyActions;
Reactly.Component = ReactlyComponent;
Reactly.Module = ReactlyModule;

module.exports = Reactly;
