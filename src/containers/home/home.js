/**
 * Containers / Home
 */

import * as React from "react";
import { styles } from "./home.styles";
import { TemplateBuilder } from '../../styles/index';
import { Button, Content, Icon, Text } from 'native-base';

export class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="apps" style={{color: tintColor}}/>
        )
    };

    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('TryLuck')}}> 
                    <Icon name='baseball' />
                    <Text>Jogar sorte</Text>
                </Button>
                <Button large iconLeft block>
                    <Icon name='calculator' />
                    <Text>Calculadora</Text>
                </Button>
                <Button large iconLeft block>
                    <Icon name='pulse' />
                    <Text>Bankhall</Text>
                </Button>
            </Content>
        );
    }

    openPlayLuck(e) {
        
    }
}

export { Home as Component };
