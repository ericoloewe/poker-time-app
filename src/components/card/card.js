/**
 * Containers / Card
 */

import * as React from "react";
import { View, Text } from 'react-native';
import { styles } from "./card.styles";
import { TemplateBuilder } from '../../styles/index';
import PropTypes from 'prop-types';

export class Card extends React.Component {
    
    static propTypes = {
        type: PropTypes.string,
        order: PropTypes.string
    };

    /**
     * @description render the template
     */
    render() {
        return (
            <View>
                <View style={styles.card}>
                    <View style={styles.leftTop}>
                        <Text style={styles.type}>{this.props.type}</Text>
                        <Text style={styles.order}>{this.props.order}</Text>
                    </View>
                    <View style={styles.rightBottom}>
                        <Text style={styles.type}>{this.props.type}</Text>
                        <Text style={styles.order}>{this.props.order}</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.centerLogo}>{this.props.type}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export { Card as Component };
