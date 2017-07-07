import store from "../stores/index";
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
            isSaving: false,
            isDeleting: false,
            hasError: false
        };
    }

    /**
     * @description generate
     */
    generate() {
        return (state = this._defaultState, action) => {
            switch (action.type) {
                case TournamentAction.SAVE: {
                    state = {
                        ...state,
                        isSaving: true
                    };
                    this.saveTournament(action.tournament);
                    break;
                }
                case TournamentAction.SAVE_SUCCESS: {
                    state = {
                        ...state,
                        isSaving: false
                    };
                    break;
                }
                case TournamentAction.SAVE_FAILURE: {
                    state = {
                        ...state,
                        isSaving: false,
                        hasError: true,
                        errors: action.errors
                    };
                    break;
                }
                case TournamentAction.FETCH: {
                    state = {
                        ...state,
                        isFetching: true
                    };
                    this.fetchTournaments();
                    break;
                }
                case TournamentAction.FETCH_SUCCESS: {
                    state = {
                        ...state,
                        isFetching: false,
                        tournaments: action.tournaments
                    };
                    break;
                }
                case TournamentAction.FETCH_FAILURE: {
                    state = {
                        ...state,
                        isFetching: false,
                        hasError: true,
                        errors: action.errors
                    };
                    break;
                }
                case TournamentAction.DELETE: {
                    state = {
                        ...state,
                        isDeleting: true
                    };
                    this.deleteTournament(action.tournamentId);
                    break;
                }
                case TournamentAction.DELETE_SUCCESS: {
                    state = {
                        ...state,
                        isDeleting: false,
                    };
                    break;
                }
                case TournamentAction.DELETE_FAILURE: {
                    state = {
                        ...state,
                        isDeleting: false,
                        hasError: true,
                        errors: action.errors
                    };
                    break;
                }
            }

            return state;
        };
    }

    /**
     * @description save tournament
     */    
    saveTournament(tournament) {
        this.repository.save(tournament)
            .then(tournament => store.dispatch(TournamentAction.saveSuccess(tournament)))
            .catch(errors => store.dispatch(TournamentAction.saveFailure(errors)));
    }

    /**
     * @description list tournaments
     */    
    fetchTournaments() {
        this.repository.list()
            .then(tournaments => store.dispatch(TournamentAction.fetchSuccess(tournaments)))
            .catch(errors => store.dispatch(TournamentAction.fetchFailure(errors)));
    }

    /**
     * @description delete tournament
     */    
    deleteTournament(tournamentId) {
        this.repository.remove(tournamentId)
            .then(() => store.dispatch(TournamentAction.deleteSuccess()))
            .catch(errors => store.dispatch(TournamentAction.deleteFailure(errors)));
    }
}
