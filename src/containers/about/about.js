/**
 * Containers / About
 */

import * as React from "react";
import { styles } from "./about.styles";
import { LB } from '../../configs/index';
import { TemplateBuilder } from '../../styles/index';
import { Content, Header, Body, Title, Text } from 'native-base';

export class About extends React.Component {
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.ABOUT.TITLE")}</Title>
                    </Body>
                </Header>
                <Text>{LB.build("CONTAINERS.ABOUT.TEXT")}</Text>
            </Content>
        );
    }
}

export { About as Component };
