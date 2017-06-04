/**
 * Containers / Settings
 */

import * as React from "react";
import { styles } from "./settings.styles";
import { TemplateBuilder } from '../../styles/index';
import { Text, Icon } from 'native-base';

export class Settings extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="settings" style={{color: tintColor}}/>
        )
    };

    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Text>Settings</Text>
        );
    }
}

export { Settings as Component };
