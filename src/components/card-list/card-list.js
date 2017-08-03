/**
 * Containers / Card
 */

import * as React from "react";
import { Animated, View, Text, Easing } from 'react-native';
import { styles } from "./card-list.styles";
import PropTypes from 'prop-types';
import { Card } from '../index';
import { StyleUtils } from "../../utils/index";

export class CardList extends React.Component {
    
    alreadyAnimated =  {
        first: false,
        second: false,
        third: false
    };

    static propTypes = {
        first: PropTypes.object,
        second: PropTypes.object,
        third: PropTypes.object
    };

    constructor() {
        super();
        this.resetState();
        this.bindStylesProps();
    }

    get animationTime() {
        return 300;
    }

    get cardHeight() {
        return 176;
    }

    resetState() {
        this.state = {
            secondTranslateY: new Animated.Value(0),
            thirdTranslateY: new Animated.Value(0)
        };
    }

    bindStylesProps() {
        styles.uses({
            cardHeight: this.cardHeight
        });
    }

    /**
     * @description render the template
     */
    render() {
        let { firstRender, secondRender, thirdRender } = this.renderAndAnimateCards();        

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

    renderAndAnimateCards() {
        if (this.props.isStoped) {
            this.resetCardsAnimation();
        } else {
            this.animateCards();
        }

        return this.renderCards();
    }

    renderCards() {
        let { first, second, third } = this.props;
        let thirdStyles = {};
        let firstRender = null, secondRender = null, thirdRender = null;

        firstRender = this.renderCard(first, { marginTop: 0 });

        if (!!second) {
            secondRender = this.renderCard(second, {
                transform: [{
                    translateY: this.state.secondTranslateY
                }],
                zIndex: 5
            });
        }

        if (!!first) {
            thirdStyles = {
                transform: [{
                    translateY: this.state.thirdTranslateY
                }],
                zIndex: 7
            };
        }

        thirdRender = this.renderCard(third, thirdStyles);

        return { firstRender, secondRender, thirdRender };
    }

    animateCards() {
        let animationOptions = { duration: this.animationTime, useNativeDriver: true, easing: Easing.bounce };
        let { first, second, third } = this.props;

        if (!!second) {
            Animated.timing(this.state.secondTranslateY, {
                ...animationOptions,
                toValue: this.cardHeight * .25
            }).start();
        }

        if (!!first) {
            Animated.timing(this.state.thirdTranslateY, {
                ...animationOptions,
                duration: this.animationTime + 200,
                toValue: this.cardHeight * .50
            }).start();
        }
    }

    resetCardsAnimation() {
        let animationOptions = { duration: this.animationTime, useNativeDriver: true, easing: Easing.bounce };

        this.state.secondTranslateY = new Animated.Value(this.cardHeight * .25);
        this.state.thirdTranslateY = new Animated.Value(this.cardHeight * .50);

        Animated.parallel([
            Animated.timing(this.state.secondTranslateY, {
                ...animationOptions,
                toValue: 0
            }),
            Animated.timing(this.state.thirdTranslateY, {
                ...animationOptions,
                duration: this.animationTime + 200,
                toValue: 0
            })
        ]).start();
    }

    /**
     * @description render the card
     */
    renderCard(luck = {}, specialStyles = {}) {
        return <Animated.View style={{...styles.animatedView, ...specialStyles}}>
            <Card type={luck.nipe} order={luck.card}/> 
        </Animated.View>;
    }
}

export { CardList as Component };
