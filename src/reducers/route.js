import { Reducer } from "redux";
import { Routes } from "../configs/routes";
import { RouteAction } from "../actions";

/**
 * @description reducers for routes
 */
export class RouteReducer {
    constructor() {
        this._defaultState = {};
    }

    /**
     * @description generate
     */
    generate() {
        return (state, action) => {
            let nextState = Object.assign({}, this._defaultState);

            if (state !== undefined) {
                nextState = Object.assign({}, state);

                switch (action.type) {
                    case RouteAction.CHANGE_ROUTE: {
                        // TODO: change route
                        break;
                    }
                }
            }

            return nextState;
        };
    }
}
