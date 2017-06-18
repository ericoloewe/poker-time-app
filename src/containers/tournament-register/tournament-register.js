/**
 * Containers / TournamentRegister
 */

import * as React from "react";
import { styles } from "./tournament-register.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Button, Content, Form, Label, Input, Item, Header, Body, Title, Text, Icon } from 'native-base';

export class TournamentRegister extends React.Component {

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
                        <Title>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.TITLE")}</Title>
                    </Body>
                </Header>
                <Form>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.NAME")}</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.BUYN")}</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel last>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.DATE")}</Label>
                        <Input value={"18/06/2017"}/>
                    </Item>
                    <Button large iconLeft block onPress={() => {this.submit()}}> 
                        <Icon name='navigate'/>
                        <Text>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.BUTTON")}</Text>
                    </Button>
                </Form>
            </Content>
        );
    }

    submit() {
        alert("OK");
    }
}

export { TournamentRegister as Component };
