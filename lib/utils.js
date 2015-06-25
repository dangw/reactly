/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */

'use strict';

class Utils {
}

Utils.addChangeListeners = function (context, stores, listeners) {
    if (listeners) {
        Object.keys(listeners).forEach(listener => {
            listeners[listener].forEach(Store => {
                stores[Store.name].addChangeListener(context[listener], context);
            });
            context[listener]();
        });
    }
};

Utils.removeChangeListeners = function (context, stores, listeners) {
    if (listeners) {
        Object.keys(listeners).forEach(listener => {
            listeners[listener].forEach(Store => {
                stores[Store.name].removeChangeListener(context[listener], context);
            });
        });
    }
};

Utils.mapFromListeners = function (listeners) {
    var result = {};
    if (listeners) {
        Object.keys(listeners).forEach(listener => {
            listeners[listener].forEach(item => {
                result[item] = listener;
            });
        });
    }
    return result;
};

module.exports = Utils;
