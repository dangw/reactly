/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

require('./app.less');

var React = require('react');
var Reactly = require('reactly');
var Router = require('react-router');

var Stores = require('./stores');
var Actions = require('./actions');

var NavBar = require('./components/nav-bar');

class App extends Reactly.Module {

    render() {
        return (
            <div id="app">
                <div id="app-nav">
                    <NavBar overflow={[
                        <a href="https://github.com/dangw/reactly">GitHub</a>,
                        <a href="https://www.npmjs.com/package/reactly">npm</a>
                    ]}>
                        <Router.Link to="/">App</Router.Link>
                        <Router.Link to="/sub-module">Sub Module</Router.Link>
                    </NavBar>
                </div>
                <div id="app-content">
                    <Router.RouteHandler/>
                </div>
            </div>
        );
    }

}

App.stores = [Stores.App];
App.actions = [Actions.App];

module.exports = App;
