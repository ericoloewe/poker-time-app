/**
 * Containers / Home
 */

import * as React from "react";
import { styles } from "./home.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { Button, Content, Icon, Text } from 'native-base';

export class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: LB.build("CONTAINERS.HOME.TAB_BAR.LABEL"),
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
                    <Text>{LB.build("CONTAINERS.HOME.TRY_LUCK")}</Text>
                </Button>
                <Button large iconLeft block>
                    <Icon name='calculator' />
                    <Text>{LB.build("CONTAINERS.HOME.CALC")}</Text>
                </Button>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('Bankhall')}}>
                    <Icon name='pulse' />
                    <Text>{LB.build("CONTAINERS.HOME.BANKHALL")}</Text>
                </Button>
            </Content>
        );
    }

    openPlayLuck(e) {
        
    }
}

export { Home as Component };
