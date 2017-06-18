/**
 * Containers / Bankhall Balance
 */

import * as React from "react";
import { styles } from "./bankhall-balance.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Button, Content, Header, Body, Title, Text, Icon } from 'native-base';

export class BankhallBalance extends React.Component {

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
                        <Title>{LB.build("CONTAINERS.BANKHALL_BALANCE.TITLE")}</Title>
                    </Body>
                </Header>
            </Content>
        );
    }
}

export { BankhallBalance as Component };
