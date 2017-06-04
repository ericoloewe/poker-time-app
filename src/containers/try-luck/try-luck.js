/**
 * Containers / TryLuck
 */

import * as React from "react";
import { styles } from "./try-luck.styles";
import { TemplateBuilder } from '../../styles/index';
import { TryLuckAction } from "../../actions/index";
import store from "../../stores/index";
import { Body, Button, Card, CardItem, Content, Text } from 'native-base';

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
            <Content>
                <Button block onPress={() => store.dispatch({ type: TryLuckAction.TRY_LUCK })}>
                    <Text>Tentar</Text>
                </Button>
                <Card>
                    <CardItem header>
                        <Text>Sua sorte é: </Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{this.state.luck.card}</Text>
                            <Text>{this.state.luck.nipe}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export { TryLuck as Component };
