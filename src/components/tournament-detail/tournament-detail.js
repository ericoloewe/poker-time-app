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
        tournament: React.PropTypes.object.isRequired
    }
    
    /**
     * @description render the template
     */
    render() {
        return (
            <View>
                <Text>
                    Nome: {this.props.tournament.name} 
                </Text>
                <Text>
                    Buyn: R$ {this.props.tournament.buyn} 
                </Text>
                <Text>
                    Online: {this.props.tournament.online} 
                </Text>
                <Text>
                    Data: {this.props.tournament.date}
                </Text>
            </View>
        );
    }
}

export { TournamentDetail as Component };
