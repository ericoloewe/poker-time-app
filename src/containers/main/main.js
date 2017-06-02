import * as React from "react";
import { styles } from "./main.styles";
import { getTheme, brandLight } from '../../styles/index';
import { Container, Content, Footer, FooterTab, Button, Icon, StyleProvider } from 'native-base';

export class Main {

    static _actualTheme = brandLight;

    getActualTheme() {
        return Main._actualTheme;
    }
    
    /**
     * @description render the template
     */
    render(content) {
        return (
            <StyleProvider style={getTheme(this.getActualTheme())}>
                <Container>
                    <Content>
                        { content }
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button>
                                <Icon name="apps" />
                            </Button>
                            <Button>
                                <Icon name="settings" />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}

export { Main as Component };
