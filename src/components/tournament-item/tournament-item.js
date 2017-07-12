/**
 * Containers / TournamentItem
 */

import * as React from "react";
import { TouchableHighlight, View } from "react-native";
import { styles } from "./tournament-item.styles";
import { TemplateBuilder } from '../../styles/index';
import { Card, CardItem, Body, Text } from 'native-base';
import { LB } from '../../configs/index';

export class TournamentItem extends React.Component {

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
                <View>
                    <Card pointerEvents="none">
                        <CardItem header>
                            <Text style={styles.cardItemHeader_text}>{this.props.tournament.name}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={styles.cardItem_view}>
                                    <Text style={styles.cardItem_view_text}>
                                        Buyn: R$ {this.props.tournament.buyn} 
                                    </Text>
                                    <Text style={styles.cardItem_view_text}>
                                        Data: {this.props.tournament.date}
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </TouchableHighlight>
        );
    }
}

export { TournamentItem as Component };
