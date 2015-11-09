/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import './app.less';

import React from 'react';
import Reactly from 'reactly';
import {Link} from 'react-router';
import Stores from './stores';
import Actions from './actions';
import NavBar from './components/nav-bar';

export default class App extends Reactly.Module {

    static get childContextTypes() {
        return Reactly.Module.childContextTypes;
    }

    static get stores() {
        return [Stores.App];
    }

    static get actions() {
        return [Actions.App];
    }

    render() {
        return (
            <div id="app">
                <div id="app-nav">
                    <NavBar overflow={[
                        <a href="https://github.com/dangw/reactly">GitHub</a>,
                        <a href="https://www.npmjs.com/package/reactly">npm</a>
                    ]}>
                        <Link to="/">App</Link>
                        <Link to="/sub-module">Sub Module</Link>
                    </NavBar>
                </div>
                <div id="app-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}
