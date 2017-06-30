/**
 * @description actions for routes
 */
export class TournamentAction {
    static REGISTER = "REGISTER";

    /**
     * @description generate
     */
    generate() {
        return {
            register: TournamentAction.register
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
}