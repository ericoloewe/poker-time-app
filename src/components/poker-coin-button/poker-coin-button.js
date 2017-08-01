/**
 * Containers / Round Button
 */

import * as React from "react";
import { View, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import { Text, Button } from 'native-base';
import { styles } from "./poker-coin-button.styles";
import PropTypes from 'prop-types';

export class PokerCoinButton extends React.Component {

    static propTypes = {
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func
    };

    constructor() {
        super();
        this.resetState();
    }

    resetState() {
        this.state = {
            isPressing: false,
            imageScale: new Animated.Value(.75)
        };
    }

    /**
     * @description render the component
     */
    render() {
        let animation = {duration: 150, useNativeDriver: true};
        let buttonCustomStyles = {
            transform: [{scale: this.state.imageScale}]
        };

        if (this.state.isPressing) {
            animation.toValue = 1;
        } else {
            animation.toValue = .8;
        }

        Animated.timing(this.state.imageScale, animation).start();

        return (
            <View style={styles.button_container}>
                <TouchableWithoutFeedback onPressOut={() => this.callOnPressOut()} onPressIn={() => this.callOnPressIn()} onPress={() => this.callOnPress()}>
                    <Animated.View style={{...styles.button_own, ...buttonCustomStyles}}>
                        <Image source={require("../../medias/images/coin.png")} style={{...styles.button_image}}>
                            {this.props.children}
                        </Image>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View> 
        );
    }

    callOnPress() {
        if (typeof(this.props.onPress) === "function") {
            this.props.onPress();
        }
    }

    callOnPressIn() {
        if (typeof(this.props.onPressIn) === "function") {
            console.log("IN");
            this.setState({isPressing: true});
            this.props.onPressIn();
        }
    }

    callOnPressOut() {
        if (typeof(this.props.onPressOut) === "function") {
            console.log("OUT");
            this.setState({isPressing: false});
            this.props.onPressOut();
        }
    }
}

export { PokerCoinButton as Component };
