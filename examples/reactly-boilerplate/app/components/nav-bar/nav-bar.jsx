/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

require('./nav-bar.less');

var React = require('react/addons');
var Router = require('react-router');

class NavBar extends React.Component {

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-bar-items">{
                    React.Children.map(this.props.children, (item, index) => {
                        return React.addons.cloneWithProps(item, {
                            className: "nav-bar-item",
                            key: index
                        })
                    })
                }</div>
                <div className="nav-bar-overflow-items">{
                    this.props.overflow.map((item, index) => {
                        return React.addons.cloneWithProps(item, {
                            className: "nav-bar-overflow-item",
                            key: index
                        })
                    })
                }</div>
            </div>
        );
    }
}

module.exports = NavBar;
