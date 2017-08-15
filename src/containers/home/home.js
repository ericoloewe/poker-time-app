/**
 * Containers / Home
 */

import * as React from "react";
import { View, Image, TouchableHighlight } from 'react-native';
import { styles } from "./home.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { PokerCoinButton, CustomerCharacters } from "../../components/index";
import { Button, Content, Icon, Text, Row, Col } from 'native-base';

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
                    <Image source={require("../../medias/images/banner.png")} style={styles.content_image} />
                    <View style={styles.content_coin}>
                        <TouchableHighlight underlayColor={styles.content_coin_touchable_underlayColor} style={styles.content_coin_touchable} onPress={() => this.goToTryLuck()}>
                            <Image source={require("../../medias/images/clover-coin.png")} style={styles.content_coin_touchable_image} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.content_links}>
                        <PokerCoinButton onPress={() => this.goToCalculator()}>
                            <Icon name='calculator' />
                        </PokerCoinButton>
                        <PokerCoinButton onPress={() => this.goToBankhall()}>
                            <Icon name='pulse' />
                        </PokerCoinButton>
                    </View>
                    <CustomerCharacters />
                </View>
            </Content>
        );
    }

    goToCalculator() {
        this.props.navigation.navigate('Calculator');
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
