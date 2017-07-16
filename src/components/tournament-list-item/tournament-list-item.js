/**
 * Components / TournamentListItem
 */

import * as React from "react";
import { TouchableHighlight, View } from "react-native";
import { styles } from "./tournament-list-item.styles";
import { TemplateBuilder } from '../../styles/index';
import { ListItem, Text } from 'native-base';
import { LB } from '../../configs/index';

export class TournamentListItem extends React.Component {

    static propTypes = {
        tournament: React.PropTypes.object.isRequired,
        onLongPress: React.PropTypes.func,
        onPress: React.PropTypes.func
    }
    
    /**
     * @description render the template
     */
    render() {
        return (
            <TouchableHighlight underlayColor={styles.underlayColor} onPress={() => this.props.onPress(this.props.tournament.id)} onLongPress={() => this.props.onLongPress(this.props.tournament.id)}>
                <View pointerEvents="none">
                    <ListItem pointerEvents="none">
                        <Text>{this.props.tournament.name} - {this.props.tournament.date}</Text>
                    </ListItem>
                </View>
            </TouchableHighlight>
        );
    }
}

export { TournamentListItem as Component };
