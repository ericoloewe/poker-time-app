import * as React from "react";
import { styles } from "./main.styles";
import { TemplateBuilder } from "../../styles/index";
import { Container, Content, StyleProvider } from 'native-base';

export class Main {
    
    /**
     * @description render the template
     */
    render(content) {
        return (
            <StyleProvider style={TemplateBuilder.getActualTheme()}>
                <Container>
                    <Content>
                        { content }
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

export { Main as Component };
