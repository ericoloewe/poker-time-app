/**
 * Containers / Home
 */

import * as React from "react";
import { View } from 'react-native';
import { styles } from "./home.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { Button, Content, Icon, Text } from 'native-base';

export class Home extends React.Component {
    static navigationOptions = {
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
                <View style={styles.content_buttons}>
                    <Button large iconLeft onPress={() => this.goToTryLuck()}> 
                        <Icon name='baseball' />
                        <Text>{LB.build("CONTAINERS.HOME.TRY_LUCK")}</Text>
                    </Button>
                    <Button large iconLeft>
                        <Icon name='calculator' />
                        <Text>{LB.build("CONTAINERS.HOME.CALC")}</Text>
                    </Button>
                    <Button large iconLeft onPress={() => this.goToBankhall()}>
                        <Icon name='pulse' />
                        <Text>{LB.build("CONTAINERS.HOME.BANKHALL")}</Text>
                    </Button>
                    <Button large iconLeft onPress={() => this.goToTournament()}>
                        <Icon name='flame' />
                        <Text>{LB.build("CONTAINERS.HOME.TOURNAMENTS")}</Text>
                    </Button>
                </View>
            </Content>
        );
    }

    goToTryLuck(e) {
        this.props.navigation.navigate('TryLuck');
    }

    goToBankhall(e) {
        this.props.navigation.navigate('Bankhall');
    }

    goToTournament(e) {
        this.props.navigation.navigate('Tournament');
    }
}

export { Home as Component };
