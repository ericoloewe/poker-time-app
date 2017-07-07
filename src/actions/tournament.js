/**
 * @description actions for tournaments
 */
export class TournamentAction {
    static SAVE = "SAVE";
    static SAVE_SUCCESS = "SAVE_SUCCESS";
    static SAVE_FAILURE = "SAVE_FAILURE";
    static DELETE = "DELETE";
    static DELETE_SUCCESS = "DELETE_SUCCESS";
    static DELETE_FAILURE = "DELETE_FAILURE";
    static FETCH = "FETCH";
    static FETCH_SUCCESS = "FETCH_SUCCESS";
    static FETCH_FAILURE = "FETCH_FAILURE";

    /**
     * @description generate
     */
    generate() {
        return {
            save: TournamentAction.save,
            saveSuccess: TournamentAction.saveSuccess,
            saveFailure: TournamentAction.saveFailure,
            delete: TournamentAction.delete,
            deleteSuccess: TournamentAction.deleteSuccess,
            deleteFailure: TournamentAction.deleteFailure,
            fetch: TournamentAction.fetch,
            fetchSuccess: TournamentAction.fetchSuccess,
            fetchFailure: TournamentAction.fetchFailure
        };
    }

    /**
     * @description save
     */
    static save(tournament) {
        return {
            type: TournamentAction.SAVE,
            tournament
        };
    }

    /**
     * @description save success
     */
    static saveSuccess(tournament) {
        return {
            type: TournamentAction.SAVE_SUCCESS,
            tournament
        };
    }

    /**
     * @description save failure
     */
    static saveFailure(errors) {
        return {
            type: TournamentAction.SAVE_FAILURE,
            errors
        };
    }

    /**
     * @description delete
     */
    static delete(tournamentId) {
        return {
            type: TournamentAction.DELETE,
            tournamentId
        };
    }

    /**
     * @description delete success
     */
    static deleteSuccess() {
        return {
            type: TournamentAction.DELETE_SUCCESS
        };
    }

    /**
     * @description delete failure
     */
    static deleteFailure(errors) {
        return {
            type: TournamentAction.DELETE_FAILURE,
            errors
        };
    }

    /**
     * @description fetch
     */
    static fetch() {
        return {
            type: TournamentAction.FETCH
        };
    }

    /**
     * @description fetch success
     */
    static fetchSuccess(tournaments) {
        return {
            type: TournamentAction.FETCH_SUCCESS,
            tournaments
        };
    }

    /**
     * @description fetch failure
     */
    static fetchFailure(errors) {
        return {
            type: TournamentAction.FETCH_FAILURE,
            errors
        };
    }
}