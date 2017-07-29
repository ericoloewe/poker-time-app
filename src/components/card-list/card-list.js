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
        third: PropTypes.object,
    };

    constructor() {
        super();
        this.resetState();
    }

    get cardHeight() {
        return 176;
    }

    resetState() {
        this.state = {
            secondMarginTop:  new Animated.Value(this.cardHeight * -1),
            thirdMarginTop: new Animated.Value(this.cardHeight * -1),
        };
    }

    /**
     * @description render the template
     */
    render() {
        let cartWidth = 124, cardHeight = 176;
        let { first, second, third } = this.props;
        let firstRender = null, secondRender = null, thirdRender = null;

        firstRender = this.renderCard(first);

        if (!!second) {
            secondRender = this.renderCard(second, { marginTop: this.state.secondMarginTop });

            Animated.timing(this.state.secondMarginTop, {
                toValue: this.cardHeight * -.75,
                duration: 1000
            }).start();    
        }

        if (!!third) {
            thirdRender = this.renderCard(third, { marginTop: this.state.thirdMarginTop });

            Animated.timing(this.state.thirdMarginTop, {
                toValue: this.cardHeight * -.75,
                duration: 1000
            }).start();    
        }

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
    renderCard(luck = {}, styles = {}) {
        return <Animated.View style={styles}>
            <Card type={luck.nipe} order={luck.card}/> 
        </Animated.View>;
    }
}

export { CardList as Component };
