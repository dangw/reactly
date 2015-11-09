/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import './index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './app';
import Routes from './routes';

ReactDOM.render((
    <Router>
        <Route component={App}>
            <Route path="/" component={Routes.App}/>
            <Route path="/sub-module" component={Routes.SubModule}/>
        </Route>
    </Router>
), document.getElementById("app"));

