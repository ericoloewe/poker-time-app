/**
 * @description actions for routes
 */
export class RouteActions {
    static CHANGE_ROUTE = "CHANGE_ROUTE";

    /**
     * @description generate
     */
    generate() {
        return {
            changeRoute: this.changeRoute
        };
    }

    /**
     * @description Change route
     */
    changeRoute(scene) {
        return {
            type: RouteActions.CHANGE_ROUTE,
            scene
        };
    }
}