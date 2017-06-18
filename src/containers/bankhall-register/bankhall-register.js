/**
 * Containers / BankhallRegister
 */

import * as React from "react";
import { styles } from "./bankhall-register.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Button, Content, Form, Label, Input, Item, Header, Body, Title, Text, Icon } from 'native-base';

export class BankhallRegister extends React.Component {

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
                        <Title>{LB.build("CONTAINERS.BANKHALL_REGISTER.TITLE")}</Title>
                    </Body>
                </Header>
                <Form>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.BANKHALL_REGISTER.FORM.IN")}</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel last>
                        <Label>{LB.build("CONTAINERS.BANKHALL_REGISTER.FORM.OUT")}</Label>
                        <Input />
                    </Item>
                    <Button large iconLeft block onPress={() => {this.submit()}}> 
                        <Icon name='navigate'/>
                        <Text>{LB.build("CONTAINERS.BANKHALL_REGISTER.FORM.BUTTON")}</Text>
                    </Button>
                </Form>
            </Content>
        );
    }

    submit() {
        alert("OK");
    }
}

export { BankhallRegister as Component };
