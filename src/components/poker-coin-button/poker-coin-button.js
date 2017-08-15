/**
 * Components / Round Button
 */

import * as React from "react";
import { View, Image, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Text, Button } from 'native-base';
import { styles } from "./poker-coin-button.styles";
import PropTypes from 'prop-types';

export class PokerCoinButton extends React.Component {

    static propTypes = {
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        styles: PropTypes.object
    };

    constructor() {
        super();
        this.resetState();
    }

    resetState() {
        this.state = {
            isPressing: false,
            imageScale: new Animated.Value(.9)
        };
    }

    /**
     * @description render the component
     */
    render() {
        let animation = { duration: 150, useNativeDriver: true, easing: Easing.bounce };
        let buttonCustomStyles = {
            transform: [{scale: this.state.imageScale}]
        };

        if (this.state.isPressing) {
            animation.toValue = 1;
        } else {
            animation.toValue = .9;
        }

        Animated.timing(this.state.imageScale, animation).start();

        return (
            <View style={{...styles.button_container, ...this.props.styles}}>
                <TouchableWithoutFeedback onPressOut={() => this.callOnPressOut()} onPressIn={() => this.callOnPressIn()} onPress={() => this.callOnPress()}>
                    <Animated.View style={{...styles.button_own, ...buttonCustomStyles}}>
                        <Image source={require("../../medias/images/poker-coin.png")} style={{...styles.button_image}}>
                            {this.props.children}
                        </Image>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View> 
        );
    }

    callOnPress() {
        this.setState({isPressing: false});

        if (typeof(this.props.onPress) === "function") {
            this.props.onPress();
        }
    }

    callOnPressIn() {
        this.setState({isPressing: true});

        if (typeof(this.props.onPressIn) === "function") {
            this.props.onPressIn();
        }
    }

    callOnPressOut() {
        this.setState({isPressing: false});

        if (typeof(this.props.onPressOut) === "function") {
            this.props.onPressOut();
        }
    }
}

export { PokerCoinButton as Component };
