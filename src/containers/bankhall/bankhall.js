/**
 * Containers / Bankhall
 */

import * as React from "react";
import { styles } from "./bankhall.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Content, Header, Body, Title } from 'native-base';

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
            </Content>
        );
    }
}

export { Bankhall as Component };
