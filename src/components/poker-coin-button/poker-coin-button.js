/**
 * Containers / Round Button
 */

import * as React from "react";
import { View, Image } from 'react-native';
import { Text, Button } from 'native-base';
import { styles } from "./poker-coin-button.styles";
import PropTypes from 'prop-types';

export class PokerCoinButton extends React.Component {

    static propTypes = {
        onPress: PropTypes.func.isRequired
    };

    /**
     * @description render the component
     */
    render() {
        return (
            <View style={styles.button_container}>
                <Button style={styles.button_own} onPress={() => this.props.onPress()}>
                    <Image source={require("../../medias/images/coin.png")} style={styles.button_image}>
                        {this.props.children}
                    </Image>
                </Button>
            </View> 
        );
    }
}

export { PokerCoinButton as Component };
