/**
 * @description actions for routes
 */
export class RouteAction {
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
            type: RouteAction.CHANGE_ROUTE,
            scene
        };
    }
}