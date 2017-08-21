/**
 * Containers / Login
 */

import * as React from "react";
import { View, Image, TouchableHighlight } from 'react-native';
import { styles } from "./login.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { Button, Content, Form, Label, Input, Item, Header, Body, Title, Text, Icon, Spinner } from 'native-base';

export class Login extends React.Component {
    constructor() {
        super();
        this.resetState();
    }

    resetState() {
        this.state = {
            user: {
                username: "",
                password: ""
            }
        }; 
    }

    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.LOGIN.TITLE")}</Title>
                    </Body>
                </Header>
                <Form>
                    <Button dark bordered large style={styles.button} onPress={() => {this.signinByFacebook()}}> 
                        <Text>{LB.build("CONTAINERS.LOGIN.FORM.FACEBOOK_BUTTON")}</Text>
                    </Button>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.LOGIN.FORM.USERNAME")}</Label>
                        <Input value={this.state.user.username} onChangeText={(username) => this.setModelProp({username})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.LOGIN.FORM.PASSWORD")}</Label>
                        <Input value={this.state.user.password} onChangeText={(password) => this.setModelProp({password})}/>
                    </Item>
                    <Button dark bordered large style={styles.button} onPress={() => {this.submit()}}> 
                        <Text>{LB.build("CONTAINERS.LOGIN.FORM.BUTTON")}</Text>
                    </Button>
                </Form>
            </Content>
        );
    }

    setModelProp(model) {
        this.setState({
            user: {
                ...(this.state.user),
                ...model
            }
        })
    }

    signinByFacebook() {
    }

    submit() {
    }
}

export { Login as Component };
