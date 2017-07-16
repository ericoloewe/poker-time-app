/**
 * Components / TournamentList
 */

import * as React from "react";
import { List } from 'native-base';
import { styles } from "./tournament-list.styles";
import { TournamentListItem } from "../index";
import { LB } from '../../configs/index';

export class TournamentList extends React.Component {

    static propTypes = {
        tournaments: React.PropTypes.array.isRequired,
        onItemLongPress: React.PropTypes.func,
        onItemPress: React.PropTypes.func
    }
    
    /**
     * @description render the template
     */
    render() {
        return (<List>{this.renderList()}</List>);
    }

    /**
     * @description render the template
     */
    renderList() {
        return this.props.tournaments.map((t, i) => {
            return <TournamentListItem key={i} tournament={t} onPress={(tournamentId) => this.props.onItemPress(tournamentId)} onLongPress={(tournamentId) => this.props.onItemLongPress(tournamentId)}/>
        });
    }
}

export { TournamentList as Component };
