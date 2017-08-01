/**
 * Containers / TryLuck
 */

import * as React from "react";
import { View } from 'react-native';
import { styles } from "./try-luck.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { TryLuckAction } from "../../actions/index";
import { CardList, PokerCoinButton } from "../../components/index";
import store from "../../stores/index";
import { Body, Button, Content, Text, Row, Col } from 'native-base';
import { VALUES } from '../../configs/index';
import { RandomUtils } from '../../utils/index';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

export class TryLuck extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    get animationTime() {
        return 300;
    }

    resetState() {
        this.state = {
            firstLuckList: [],
            secondLuckList: []
        };
    }

    bindEvents() {
    }
    
    /**
     * @description render the template
     */
    render() {
        let { firstLuckList, secondLuckList } = this.state;

        return TemplateBuilder.extend(
            <Content style={styles.content}>
                <Row style={styles.cardsRow}>
                    <Col style={styles.cardsCol}>
                        <CardList first={firstLuckList[0]} second={firstLuckList[1]} third={firstLuckList[2]} />
                    </Col>
                    <Col style={styles.cardsCol}>
                        <CardList first={secondLuckList[0]} second={secondLuckList[1]} third={secondLuckList[2]} />
                    </Col>
                </Row>
                <Row style={styles.buttonRow}>
                    <Col style={styles.buttonCol}>
                        <View style={styles.button}>
                            <PokerCoinButton onPressIn={() => this.startToTryLuck()} onPressOut={() => this.stopToTryLuck()}>
                                <Text>{LB.build("CONTAINERS.TRY_LUCK.BUTTON")}</Text>
                            </PokerCoinButton>
                        </View>
                    </Col>
                </Row>
            </Content>
        );
    }

    tryNextLuck() {
        let { firstLuckList, secondLuckList } = this.state;
        let firstLuck = this.tryLuck();
        let secondLuck = this.tryLuck();

        firstLuckList.unshift(firstLuck);
        secondLuckList.unshift(secondLuck);

        this.setState({
            firstLuckList,
            secondLuckList
        });
    }

    /**
     * @description try luck
     */    
    tryLuck() {
        let cards = Object.keys(VALUES.CARDS);
        let randomCardIndex = RandomUtils.getRandomInt(0, cards.length - 1);
        let suits = Object.keys(VALUES.SUITS);
        let randomSuitIndex = RandomUtils.getRandomInt(0, suits.length - 1);

        return {
            card: cards[randomCardIndex],
            nipe: VALUES.SUITS[suits[randomSuitIndex]].CODE
        };
    }

    startToTryLuck() {
        let self = this;
        this.tryNextLuck();

        if (this.tryluckInterval == null) {
            repeatInterval();
        }

        function repeatInterval() {
            self.tryluckInterval = self.requestAnimationFrame(() => {
                if (self.tryluckInterval != null) {
                    self.tryNextLuck();
                    self.setTimeout(() => repeatInterval(), self.animationTime);
                }
            }, self.animationTime);
        }
    }

    stopToTryLuck() {
        this.tryluckInterval = null;
        this.cancelAnimationFrame(this.tryluckInterval);
    }
}

reactMixin(TryLuck.prototype, TimerMixin);

export { TryLuck as Component };
