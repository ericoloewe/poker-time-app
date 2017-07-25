/**
 * Containers / Round Button
 */

import * as React from "react";
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { styles } from "./round-button.styles";
import PropTypes from 'prop-types';

export class RoundButton extends React.Component {

    static propTypes = {
        onPress: PropTypes.func.isRequired
    };

    /**
     * @description render the component
     */
    render() {
        return (
            <View style={styles.button_container}> 
                <Button style={styles.button_own} onPress={() => this.props.onPress()}>
                    <Text style={styles.button_text}>
                        {this.props.children}
                    </Text>
                </Button>
            </View> 
        );
    }
}

export { RoundButton as Component };
