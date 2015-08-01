/**
 * Copyright 2015, Dan Gwozdz <dev.dangw@gmail.com>
 * Copyrights licensed under the ISC License. See the accompanying LICENSE.md file for terms.
 */
'use strict';

export default class ReactlyActions {

    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    dispatchAction(actionType, actionPayload) {
        var payload = actionPayload || {};
        payload.actionType = actionType;
        this.dispatcher.dispatch(payload);
    }

}
