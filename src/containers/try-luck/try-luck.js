/**
 * Containers / TryLuck
 */

import * as React from "react";
import { View } from 'react-native';
import { styles } from "./try-luck.styles";
import { TemplateBuilder } from '../../styles/index';
import { TryLuckAction } from "../../actions/index";
import { Card } from "../../components/index";
import store from "../../stores/index";
import { Body, Button, Content, Text, Grid, Col } from 'native-base';

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
            <Content style={styles.table} contentContainerStyle={styles.table_contentContainer}> 
                <Button block onPress={() => store.dispatch({ type: TryLuckAction.TRY_LUCK })} style={styles.button}>
                    <Text>Tentar</Text>
                </Button>
                <View style={styles.card}>
                    <Card type={this.state.luck.nipe} order={this.state.luck.card}/> 
                </View>
            </Content>
        );
    }
}

export { TryLuck as Component };
