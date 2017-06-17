/**
 * Containers / About
 */

import * as React from "react";
import { styles } from "./about.styles";
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
                        <Title>Sobre</Title>
                    </Body>
                </Header>
                <Text>Somos uma iniciativa propria...</Text>
            </Content>
        );
    }
}

export { About as Component };
