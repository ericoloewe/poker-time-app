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
            <Content style={{
                backgroundColor: "#005f18"
            }}>
                <View style={styles.content_buttons}>
                    <Button large iconLeft onPress={() => this.goToTryLuck()} style={{
                            backgroundColor: "#f6f8f7",
                            borderWidth: 5,
                            borderColor: "#FFF",
                            borderRadius: 20,
                            elevation: 20,
                            marginTop: 20,
                            marginBottom: 20,
                        }}> 
                        <Icon name='baseball' style={{
                            color: "#0d4909"
                        }} />
                        <Text style={{
                            color: "#0d4909"
                        }}>{LB.build("CONTAINERS.HOME.TRY_LUCK")}</Text>
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
