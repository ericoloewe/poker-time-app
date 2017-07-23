import * as React from "react";
import { View } from 'react-native';
import { styles } from "./main.styles";
import { TemplateBuilder } from "../../styles/index";
import { Container, StyleProvider, Button, Text } from 'native-base';

export class Main {
    
    /**
     * @description render the template
     */
    render(content, options) {
        return (
            <StyleProvider style={TemplateBuilder.getActualTheme()}>
                <Container>
                    { content }
                    { this.renderButton((options || {}).button) }
                </Container>
            </StyleProvider>
        );
    }

    /**
     * @description render the button
     */
    renderButton(options) {
        let button = null;

        if (!!options) {
            button = <View style={styles.button_container}> 
                        <Button style={styles.button_own} onPress={() => options.onPress()}>
                            <Text style={styles.button_text}>+</Text>
                        </Button>
                    </View> 
        }

        return button;
    }
}

export { Main as Component };
