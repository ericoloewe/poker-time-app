/**
 * Containers / TournamentList
 */

import * as React from "react";
import { View, Alert } from 'react-native';
import { Text } from 'native-base';
import { styles } from "./tournament-list.styles";
import { TemplateBuilder } from '../../styles/index';
import { TournamentItem } from "../index";
import { LB } from '../../configs/index';
import store from "../../stores/index";
import { TournamentAction } from "../../actions/index";
import { NavigationActions } from 'react-navigation'

export class TournamentList extends React.Component {
    constructor(props) {
        super(props);
        this.resetState();
    }

    resetState() {
        this.state = {
            tournaments: []
        }; 
    }

    bindEvents() {
        this.bindTournamentsUpdateEvent();
    }

    bindTournamentsUpdateEvent() {
        this.unsubscribe = store.subscribe(() => {
            let tournament = store.getState().tournament;

            this.setState(tournament);
        });
    }

    componentWillMount() {
        this.bindEvents();
        this.dispachEvents();
    }

    componentWillUnmount() {
        if (typeof(this.unsubscribe) === "function") {
            this.unsubscribe();
        }
    }

    dispachEvents() {
        store.dispatch(TournamentAction.fetch());
    }

    editTournament(tournamentId) {
        NavigationActions.navigate({
            routeName: 'TournamentRegister'
        });
    }

    deleteTournament(tournamentId) {
        Alert.alert("Deletar torneio", "Você deseja deletar esse torneio?", [
            {
                text: "SIM",
                onPress: () => store.dispatch(TournamentAction.delete(tournamentId))
            },
            {
                text: "NÃO"
            }
        ]);
    }
    
    /**
     * @description render the template
     */
    render() {
        return (<View>{this.renderList()}</View>);
    }

    /**
     * @description render the template
     */
    renderList() {
        let rendered = <Text>Is fetching</Text>;

        if (!this.state.isFetching) {
            if (this.state.hasError) {
                rendered = <Text>Error here</Text>;
            } else {
                rendered = this.state.tournaments.map((t, i) => {
                    return <TournamentItem key={i} tournament={t} onPress={(tournamentId) => this.editTournament(tournamentId)} onLongPress={(tournamentId) => this.deleteTournament(tournamentId)}/>
                });
            }
        }

        return rendered;
    }
}

export { TournamentList as Component };
