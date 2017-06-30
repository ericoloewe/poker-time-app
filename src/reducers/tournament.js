import { TournamentAction } from "../actions/index";
import { VALUES } from '../configs/index';
import { TournamentRepository } from '../repositories/index';

/**
 * @description reducers for routes
 */
export class TournamentReducer {
    constructor() {
        this.repository = new TournamentRepository();
        this._defaultState = {
            tournaments: []
        };
    }

    /**
     * @description generate
     */
    generate() {
        return (state = this._defaultState, action) => {
            switch (action.type) { 
                case TournamentAction.REGISTER: {
                    state = this.saveTournament(state);
                    break;
                }
            }

            return state;
        };
    }

    /**
     * @description save tournament
     */    
    saveTournament(state) {
        this.repository.save(state);
        return Object.assign(state, {});
    }
}
