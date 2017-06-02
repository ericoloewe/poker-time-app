/**
 * Configs / Routes
 */
import * as React from "react";
import { ROUTES, COLORS, STYLES } from "../index";
import * as Containers from "../../containers/index";
import { Home } from "../../containers/index";
import { StackNavigator } from 'react-navigation';

export class Routes {
    static stackOptions = {};

    constructor() {
        this.load();
    }

    /**
     * generate the routes
     */
    generate() {
        var stacks = {}; 

        this.routes.forEach((stack) => {
            let Component = Containers[stack.component];

            if (Component != null) {
                stacks[stack.component] = {
                    screen: Containers[stack.component],
                    navigationOptions: ({navigation}) => ({
                        title: stack.title,
                        headerTitleStyle: {
                            color: COLORS.HEADER.TEXT,
                            fontWeight: STYLES.HEADER.TEXT.FONT_WEIGHT,
                            alignSelf: STYLES.HEADER.TEXT.ALIGN_SELF
                        },
                        headerStyle: {
                            backgroundColor: COLORS.HEADER.BACKGROUND
                        }
                    })                    
                };
            }
        });

        return StackNavigator(stacks, Routes.stackOptions);
    }

    /**
     * load
     */
    load() {
        this.routes = ROUTES;
    }
}
