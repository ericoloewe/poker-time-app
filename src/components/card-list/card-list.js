/**
 * Containers / Card
 */

import * as React from "react";
import { Animated, View, Text } from 'react-native';
import { styles } from "./card-list.styles";
import PropTypes from 'prop-types';
import { Card } from '../index';

export class CardList extends React.Component {
    
    static propTypes = {
        first: PropTypes.object,
        second: PropTypes.object,
        third: PropTypes.object
    };

    constructor() {
        super();
        this.resetState();
    }

    get animationTime() {
        return 500;
    }

    get cardHeight() {
        return 176;
    }

    resetState() {
        this.state = {
            secondTranslateY:  new Animated.Value(this.cardHeight * -1),
            thirdTranslateY: new Animated.Value(this.cardHeight * -1),
        };
    }

    /**
     * @description render the template
     */
    render() {
        let cartWidth = 124, cardHeight = 176;
        let { first, second, third } = this.props;
        let firstRender = null, secondRender = null, thirdRender = null;
        let animationOptions = { duration: this.animationTime, useNativeDriver: true };
        let animations = [];

        firstRender = this.renderCard(first);

        if (!!second) {
            secondRender = this.renderCard(second, { transform: [ { translateY: this.state.secondTranslateY } ] });

            animations.push(Animated.timing(this.state.secondTranslateY, {
                ...animationOptions,
                toValue: this.cardHeight * -.75
            }));
        }

        if (!!third) {
            thirdRender = this.renderCard(third, { transform: [ { translateY: this.state.thirdTranslateY } ] });

            animations.push(Animated.timing(this.state.thirdTranslateY, {
                ...animationOptions,
                toValue: this.cardHeight * -1.50
            }));
        }

        Animated.parallel(animations).start();

        return (
            <View style={{
                flex: 1,
                flexDirection: "column"
            }}>
                {firstRender}
                {secondRender}
                {thirdRender}
            </View>
        );
    }

    /**
     * @description render the card
     */
    renderCard(luck = {}, specialStyles = {}) {
        return <Animated.View style={{...specialStyles, ...styles.animatedView}}>
            <Card type={luck.nipe} order={luck.card}/> 
        </Animated.View>;
    }
}

export { CardList as Component };
