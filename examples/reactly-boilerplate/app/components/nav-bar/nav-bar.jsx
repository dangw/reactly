/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

import './nav-bar.less';

import React from 'react';
import Router from 'react-router';

export default class NavBar extends React.Component {

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-bar-items">{
                    React.Children.map(this.props.children, (item, index) => {
                        return React.cloneElement(item, {
                            className: "nav-bar-item",
                            key: index
                        })
                    })
                }</div>
                <div className="nav-bar-overflow-items">{
                    this.props.overflow.map((item, index) => {
                        return React.cloneElement(item, {
                            className: "nav-bar-overflow-item",
                            key: index
                        })
                    })
                }</div>
            </div>
        );
    }

}
