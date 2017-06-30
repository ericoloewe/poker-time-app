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
            register: this.register
        };
    }

    /**
     * @description register
     */
    register() {
        return {
            type: TournamentAction.REGISTER
        };
    }
}