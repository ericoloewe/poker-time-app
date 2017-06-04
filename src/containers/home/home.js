/**
 * Containers / Home
 */

import * as React from "react";
import { styles } from "./home.styles";
import { TemplateBuilder } from '../../styles/index';
import { Text, Icon } from 'native-base';

export class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="apps" style={[styles.icon, {tintColor: tintColor}]}/>
        )
    };

    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Text>Home</Text>
        );
    }
}

export { Home as Component };
