/**
 * Components / Round Button
 */

import * as React from "react";
import { View, Image, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Text, Button } from 'native-base';
import { styles } from "./customer-characters.styles";
import PropTypes from 'prop-types';

export class CustomerCharacters extends React.Component {

    get CHARACTER_TYPE() {
        return {
            DONKEY: "donkey",
            BALANCE: "balance",
            SHARK: "shark",
        }
    }

    get COIN_TYPE() {
        return {
            RED: "red",
            YELLOW: "yellow",
            GREEN: "green",
        }
    }

    render() {
        return <View style={styles.characters}>
                    {this.renderCharacterCoin(this.CHARACTER_TYPE.DONKEY, this.COIN_TYPE.RED)}
                    {this.renderCharacterCoin(this.CHARACTER_TYPE.BALANCE)}
                    {this.renderCharacterCoin(this.CHARACTER_TYPE.SHARK, this.COIN_TYPE.GREEN)}
                </View>
    }

    renderCharacterCoin(characterType, coinType) {
        return <Image source={this.getCoinImage(coinType)} style={this.getCharacterStyles(characterType)}>
            <Image source={this.getCharacterImage(characterType)} style={styles.characters_coin_character} />
        </Image>;
    }

    getCharacterStyles(characterType) {
        let characterStyles = { ...styles.characters_coin };

        switch (characterType) {
            case this.CHARACTER_TYPE.DONKEY: {
                break;
            }
            case this.CHARACTER_TYPE.BALANCE: {
                characterStyles.marginTop = 20;
                break;
            }
            case this.CHARACTER_TYPE.SHARK: {
                break;
            }
        }

        return characterStyles;
    }

    getCoinImage(coinType) {
        let image = require("../../medias/images/3d-coin.png");

        switch (coinType) {
            case this.COIN_TYPE.RED: {
                image = require("../../medias/images/3d-coin-red.png");
                break;
            }
            case this.COIN_TYPE.YELLOW: {
                image = require("../../medias/images/3d-coin-yellow.png");
                break;
            }
            case this.COIN_TYPE.GREEN: {
                image = require("../../medias/images/3d-coin-green.png");
                break;
            }
        }

        return image;
    }

    getCharacterImage(characterType) {
        let image = null;

        switch (characterType) {
            case this.CHARACTER_TYPE.DONKEY: {
                image = require(`../../medias/images/donkey.png`);
                break;
            }
            case this.CHARACTER_TYPE.BALANCE: {
                image = require(`../../medias/images/balance.png`);
                break;
            }
            case this.CHARACTER_TYPE.SHARK: {
                image = require(`../../medias/images/shark.png`);
                break;
            }
        }

        return image;
    }
}

export { CustomerCharacters as Component };
