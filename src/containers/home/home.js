/**
 * Containers / Home
 */

import * as React from "react";
import { View, Image } from 'react-native';
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
                <View style={styles.content_cards}>
                    <Image source={require("../../medias/images/cards.png")} style={styles.content_cards_image} />
                </View>
                <View style={styles.content_buttons}>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button} onPress={() => this.goToTryLuck()}> 
                        <Icon name='baseball' />
                        <Text style={styles.content_buttons_button_text}>{LB.build("CONTAINERS.HOME.TRY_LUCK")}</Text>
                    </Button>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button}>
                        <Icon name='calculator' />
                        <Text style={styles.content_buttons_button_text}>{LB.build("CONTAINERS.HOME.CALC")}</Text>
                    </Button>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button} onPress={() => this.goToBankhall()}>
                        <Icon name='pulse' />
                        <Text style={styles.content_buttons_button_text}>{LB.build("CONTAINERS.HOME.BANKHALL")}</Text>
                    </Button>
                    <Button dark bordered large iconLeft style={styles.content_buttons_button} onPress={() => this.goToTournament()}>
                        <Icon name='flame' />
                        <Text style={styles.content_buttons_button_text}>{LB.build("CONTAINERS.HOME.TOURNAMENTS")}</Text>
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
