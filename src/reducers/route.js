import { Reducer } from "redux";
import { Routes } from "../configs/routes";
import { RouteActions } from "../actions";

/**
 * @description reducers for routes
 */
export class RouteReducer {
    constructor() {
        this._defaultState = {
            actualRoute: Routes.defaultRoute()
        };
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
                    case RouteActions.CHANGE_ROUTE: {
                        // TODO: change route
                        break;
                    }
                }
            }

            return nextState;
        };
    }
}
