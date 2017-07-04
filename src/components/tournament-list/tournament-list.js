/**
 * Containers / TournamentList
 */

import * as React from "react";
import { View, Alert } from 'react-native';
import { styles } from "./tournament-list.styles";
import { TemplateBuilder } from '../../styles/index';
import { TournamentItem } from "../index";
import { LB } from '../../configs/index';
import store from "../../stores/index";
import { TournamentAction } from "../../actions/index";

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

            if (tournament.isFetching) {
                if (!!tournament) {
                    store.dispatch(TournamentAction.fetchSuccess());
                } else {
                    store.dispatch(TournamentAction.fetchFailure());
                }
            }
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
        return (<View>{
            this.state.tournaments.map((t, i) => {
                return <TournamentItem key={i} tournament={t} onLongPress={(tournamentId) => this.deleteTournament(tournamentId)}/>
            })
        }</View>);
    }
}

export { TournamentList as Component };
