import * as React from "react";
import { View, Image } from 'react-native';
import { styles } from "./main.styles";
import { TemplateBuilder } from "../../styles/index";
import { Container, StyleProvider, Button, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export class Main { 
    
    /**
     * @description render the template
     */
    render(content, options = {}) {
        return (
            <StyleProvider style={TemplateBuilder.getActualTheme()}>
                <Container style={styles.container}>
                    <Image source={require("../../medias/images/background.png")} style={styles.container_backgroundImage}>
                        { options.before }
                        { content }
                        { options.after }
                    </Image>
                </Container>
            </StyleProvider>
        );
    }
}

export { Main as Component };
