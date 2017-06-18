/**
 * Containers / Bankhall
 */

import * as React from "react";
import { styles } from "./bankhall.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Button, Content, Header, Body, Title, Text, Icon } from 'native-base';

export class Bankhall extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    resetState() {
        this.state = {}; 
    }

    bindEvents() {
    }
    
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.BANKHALL.TITLE")}</Title>
                    </Body>
                </Header>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('BankhallRegister')}}> 
                    <Icon name='paper' />
                    <Text>{LB.build("CONTAINERS.BANKHALL.REGISTER")}</Text>
                </Button>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('BankhallBalance')}}> 
                    <Icon name='calculator' />
                    <Text>{LB.build("CONTAINERS.BANKHALL.BALANCE")}</Text>
                </Button>
            </Content>
        );
    }
}

export { Bankhall as Component };
