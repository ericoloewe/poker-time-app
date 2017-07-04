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
            tournaments: [],
            isFetching: false,
            error: false
        };
    }

    /**
     * @description generate
     */
    generate() {
        return (state = this._defaultState, action) => {
            switch (action.type) {
                case TournamentAction.REGISTER: {
                    state = {
                        ...state,
                        tournaments: [
                            ...state.tournaments,
                            this.saveTournament(action.tournament)
                        ]
                    };
                    break;
                }
                case TournamentAction.DELETE: {
                    state.tournaments.splice(0, 1);
                    break;
                }
                case TournamentAction.FETCH: {
                    state = {
                        ...state,
                        isFetching: true
                    };
                }
                case TournamentAction.FETCH_SUCCESS: {
                    state = {
                        ...state,
                        isFetching: false
                    };
                }
                case TournamentAction.FETCH_FAILURE: {
                    state = {
                        ...state,
                        isFetching: false,
                        error: true
                    };
                }
            }

            return state;
        };
    }

    /**
     * @description save tournament
     */    
    saveTournament(tournament) {
        this.repository.save(tournament);

        return tournament;
    }

    /**
     * @description delete tournament
     */    
    deleteTournament(tournament) {
        this.repository.remove(tournament);
    }
}
