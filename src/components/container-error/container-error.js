/**
 * Components / ContainerError
 */

import * as React from "react";
import { View } from "react-native";
import { styles } from "./container-error.styles";
import { Text } from 'native-base';
import { LB } from '../../configs/index';

export class ContainerError extends React.Component {

    static propTypes = {
        error: React.PropTypes.string
    }
    
    /**
     * @description render the template
     */
    render() {
        let error = <Text>Tivemos algum problema do qual não temos uma solução no momento!</Text>;

        if (typeof(this.props.error) === "string") {
            error = <Text>{this.props.error}</Text>;
        }

        return (
            <View style={styles.error}>
                <Text style={styles.error_text}>
                    {error}
                </Text>
            </View>
        );
    }
}

export { ContainerError as Component };
