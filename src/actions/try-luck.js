/**
 * @description actions for routes
 */
export class TryLuckAction {
    static TRY_LUCK = "TRY_LUCK";

    /**
     * @description generate
     */
    generate() {
        return {
            tryLuck: this.tryLuck
        };
    }

    /**
     * @description Try Luck
     */
    tryLuck() {
        return {
            type: TryLuckAction.TRY_LUCK
        };
    }
}