/**
 * Components / TournamentDetail
 */

import * as React from "react";
import { TouchableHighlight, View } from "react-native";
import { styles } from "./tournament-detail.styles";
import { Text } from 'native-base';
import { LB } from '../../configs/index';

export class TournamentDetail extends React.Component {

    static propTypes = {
        tournament: React.PropTypes.object.isRequired,
        style: React.PropTypes.object
    }
    
    /**
     * @description render the template
     */
    render() {
        return (
            <View style={this.props.style}>
                <Text style={styles.title}>
                    {LB.build("COMPONENTS.TOURNAMENT_DETAIL.NAME")}: 
                </Text>
                <Text style={styles.value}>
                    {this.props.tournament.name} 
                </Text>
                <Text style={styles.title}>
                    {LB.build("COMPONENTS.TOURNAMENT_DETAIL.BUYN")}:
                </Text>
                <Text style={styles.value}>
                    R$ {this.props.tournament.buyn} 
                </Text>
                <Text style={styles.title}>
                    {LB.build("COMPONENTS.TOURNAMENT_DETAIL.ONLINE")}:
                </Text>
                <Text style={styles.value}>
                    {this.props.tournament.online ? LB.build("GENERAL.VALUES.YES") : LB.build("GENERAL.VALUES.NO")}
                </Text>
                <Text style={styles.title}>
                    {LB.build("COMPONENTS.TOURNAMENT_DETAIL.DATE")}:
                </Text>
                <Text style={styles.value}>
                    {this.props.tournament.date}
                </Text>
            </View>
        );
    }
}

export { TournamentDetail as Component };
