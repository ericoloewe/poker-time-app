import { combineReducers } from "redux";
import { RouteReducer } from "./route";
import { TryLuckReducer } from "./try-luck";
import { TournamentReducer } from "./tournament";

export default combineReducers({
    route: new RouteReducer().generate(),
    tryLuck: new TryLuckReducer().generate(),
    tournament: new TournamentReducer().generate()
});

export { RouteReducer, TryLuckReducer };
