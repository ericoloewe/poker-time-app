import { combineReducers } from "redux";
import { RouteReducer } from "./route";
import { TryLuckReducer } from "./try-luck";

export default combineReducers({
    route: new RouteReducer().generate(),
    tryLuck: new TryLuckReducer().generate()
});

export { RouteReducer, TryLuckReducer };
