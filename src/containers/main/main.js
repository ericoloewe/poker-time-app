import * as React from "react";
import { View } from 'react-native';
import { styles } from "./main.styles";
import { TemplateBuilder } from "../../styles/index";
import { Container, StyleProvider, Button, Text } from 'native-base';

export class Main {
    
    /**
     * @description render the template
     */
    render(content, options = {}) {
        return (
            <StyleProvider style={TemplateBuilder.getActualTheme()}>
                <Container>
                    { options.before }
                    { content }
                    { options.after }
                </Container>
            </StyleProvider>
        );
    }
}

export { Main as Component };
