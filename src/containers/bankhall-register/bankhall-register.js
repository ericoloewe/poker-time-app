/**
 * Containers / BankhallRegister
 */

import * as React from "react";
import { styles } from "./bankhall-register.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Button, Content, Header, Body, Title, Text, Icon } from 'native-base';

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
            </Content>
        );
    }
}

export { BankhallRegister as Component };
