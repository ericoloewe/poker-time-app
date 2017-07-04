/**
 * @description actions for routes
 */
export class TournamentAction {
    static REGISTER = "REGISTER";
    static DELETE = "DELETE"
    static FETCH = "FETCH";
    static FETCH_SUCCESS = "FETCH_SUCCESS";
    static FETCH_FAILURE = "FETCH_FAILURE";

    /**
     * @description generate
     */
    generate() {
        return {
            register: TournamentAction.register,
            fetch: TournamentAction.fetch,
            fetchSuccess: TournamentAction.fetchSuccess,
            fetchFailure: TournamentAction.fetchFailure
        };
    }

    /**
     * @description register
     */
    static register(tournament) {
        return {
            type: TournamentAction.REGISTER,
            tournament
        };
    }

    /**
     * @description register
     */
    static delete(tournamentId) {
        return {
            type: TournamentAction.DELETE,
            tournamentId
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
     * @description fetch
     */
    static fetchSuccess() {
        return {
            type: TournamentAction.FETCH_SUCCESS
        };
    }

    /**
     * @description fetch
     */
    static fetchFailure() {
        return {
            type: TournamentAction.FETCH_FAILURE
        };
    }
}