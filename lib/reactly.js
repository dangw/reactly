/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

import ReactlyStore from './reactly-store';
import ReactlyActions from './reactly-actions';
import ReactlyComponent from './reactly-component';
import ReactlyModule from './reactly-module';

class Reactly {
}

Reactly.Store = ReactlyStore;
Reactly.Actions = ReactlyActions;
Reactly.Component = ReactlyComponent;
Reactly.Module = ReactlyModule;

export default Reactly;
