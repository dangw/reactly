/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

require('./index.html');

var React = require('react');
var Router = require('react-router');

var App = require('./app');
var Routes = require('./routes');

var routes = (
    <Router.Route handler={App}>
        <Router.Route path="/" handler={Routes.App}/>
        <Router.Route path="/sub-module" handler={Routes.SubModule}/>
    </Router.Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
