/**
 * Containers / TryLuck
 */

import * as React from "react";
import { View } from 'react-native';
import { styles } from "./try-luck.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { TryLuckAction } from "../../actions/index";
import { Card, PokerCoinButton } from "../../components/index";
import store from "../../stores/index";
import { Body, Button, Content, Text, Row, Col } from 'native-base';

export class TryLuck extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    resetState() {
        this.state = {
            luck: {}
        };
    }

    bindEvents() {
        this.bindLuckUpdateEvent();
    }

    bindLuckUpdateEvent() { 
        store.subscribe(() => {
            this.setState(store.getState().tryLuck);
        });
    }
    
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content style={styles.content}>
                <Row>
                    <Col style={styles.cardsCol}>
                        <Card type={this.state.luck.nipe} order={this.state.luck.card}/> 
                    </Col>
                    <Col style={styles.cardsCol}>
                        <Card type={this.state.luck.nipe} order={this.state.luck.card}/> 
                    </Col>
                </Row>
                <Row style={styles.buttonRow}>
                    <Col style={styles.buttonCol}>
                        <View style={styles.button}>
                            <PokerCoinButton onPress={() => this.tryNextLuck()}>
                                <Text>{LB.build("CONTAINERS.TRY_LUCK.BUTTON")}</Text>
                            </PokerCoinButton>
                        </View>
                    </Col>
                </Row>
            </Content>
        );
    }

    tryNextLuck() {
        store.dispatch({ type: TryLuckAction.TRY_LUCK });
    }
}

export { TryLuck as Component };
