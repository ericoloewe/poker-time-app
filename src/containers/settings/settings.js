/**
 * Containers / Settings
 */

import * as React from "react";
import { styles } from "./settings.styles";
import { TemplateBuilder } from '../../styles/index';
import { Button, Content, Icon, Text } from 'native-base';

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
            <Content>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('About')}}> 
                    <Icon name='book' />
                    <Text>Sobre</Text>
                </Button>
            </Content>
        );
    }
}

export { Settings as Component };
