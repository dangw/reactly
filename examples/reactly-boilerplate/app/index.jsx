/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import './index.html';

import React from 'react';
import Router from 'react-router';
import App from './app';
import Routes from './routes';

var routes = (
    <Router.Route handler={App}>
        <Router.Route path="/" handler={Routes.App}/>
        <Router.Route path="/sub-module" handler={Routes.SubModule}/>
    </Router.Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
