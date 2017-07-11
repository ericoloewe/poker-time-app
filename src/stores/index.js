/**
 * Stores
 */

import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import { logger, crashReporter } from "../middlewares/index";

export default createStore(
    reducers,
    applyMiddleware(
        logger,
        crashReporter
    )
);
