/**
 * Components / TournamentList
 */

import * as React from "react";
import { List } from 'native-base';
import { RefreshControl } from 'react-native';
import { styles } from "./tournament-list.styles";
import { TournamentListItem } from "../index";
import { LB } from '../../configs/index';

export class TournamentList extends React.Component {

    static propTypes = {
        tournaments: React.PropTypes.array.isRequired,
        onItemLongPress: React.PropTypes.func,
        onItemPress: React.PropTypes.func,
        onRefresh: React.PropTypes.func,
    }

    constructor() {
        super();
        this.resetState();
    }

    resetState() {
        this.state = {
            refreshing: false
        }; 
    }

    componentWillUpdate() {
        if (this.props.tournaments !== this.props.tournaments) {
            this.setState({refreshing: false});
        }
    }
    
    /**
     * @description render the template
     */
    render() {
        return <List 
            refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh()} />} 
            dataArray={this.props.tournaments}
            renderRow={(t, i) => <TournamentListItem key={i} tournament={t} onPress={(tournamentId) => this.props.onItemPress(tournamentId)} onLongPress={(tournamentId) => this.props.onItemLongPress(tournamentId)}/>} />;
    }

    onRefresh() {
        this.setState({refreshing: true});
        this.props.onRefresh();
    }
}

export { TournamentList as Component };
