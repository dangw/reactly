/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

export default class Utils {

    static addChangeListeners(context, stores, listeners) {
        if (listeners) {
            Object.keys(listeners).forEach(listener => {
                listeners[listener].forEach(Store => {
                    stores[Utils.getName(Store)].addChangeListener(context[listener], context);
                });
                context[listener]();
            });
        }
    }

    static removeChangeListeners(context, stores, listeners) {
        if (listeners) {
            Object.keys(listeners).forEach(listener => {
                listeners[listener].forEach(Store => {
                    stores[Utils.getName(Store)].removeChangeListener(context[listener], context);
                });
            });
        }
    }

    static mapFromListeners(listeners) {
        var result = {};
        if (listeners) {
            Object.keys(listeners).forEach(listener => {
                listeners[listener].forEach(item => {
                    result[item] = listener;
                });
            });
        }
        return result;
    }

    static getName(func) {
        if (func.name === undefined) {
            func.name = ('' + func).match(/^\s*function ([^ (]*)/)[1];
        }
        return func.name;
    }

}
