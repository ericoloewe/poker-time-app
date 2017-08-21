/**
 * Containers / Settings
 */

import * as React from "react";
import { View } from 'react-native';
import { styles } from "./settings.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { Button, Content, Icon, Text } from 'native-base';

export class Settings extends React.Component {
    static navigationOptions = {
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
                <View style={styles.content_buttons}>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button} onPress={() => {this.props.navigation.navigate('About')}}> 
                        <Icon name='book' />
                        <Text>{LB.build("CONTAINERS.SETTINGS.ABOUT")}</Text>
                    </Button>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button} onPress={() => this.goToTournament()}>
                        <Icon name='flame' />
                        <Text style={styles.content_buttons_button_text}>{LB.build("CONTAINERS.SETTINGS.TOURNAMENTS")}</Text>
                    </Button>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button} onPress={() => this.goToLogin()}>
                        <Icon name='flame' />
                        <Text style={styles.content_buttons_button_text}>{LB.build("CONTAINERS.SETTINGS.LOGIN")}</Text>
                    </Button>
                </View>
            </Content>
        );
    }

    goToTournament(e) {
        this.props.navigation.navigate('Tournament');
    }

    goToLogin(e) {
        this.props.navigation.navigate('Login');
    }
}

export { Settings as Component };
