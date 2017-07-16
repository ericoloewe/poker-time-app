/**
 * Middleware / logger
 */

import { Logger, CONFIGS } from "../configs/index";

const LOGGER = new Logger("logger");

/**
 * Logs all actions and states after they are dispatched.
 */
export const logger = store => next => action => {
  if (CONFIGS.REDUX.HARD_LOG_ENABLE) {
    LOGGER.info('dispatching', action);
  }

  let result = next(action);
  
  if (CONFIGS.REDUX.HARD_LOG_ENABLE) {
    LOGGER.info('next state', store.getState());
  }

  return result;
}