/**
 * Containers / TournamentList
 */

import * as React from "react";
import { Alert } from 'react-native';
import { styles } from "./tournament-list.styles";
import { TemplateBuilder } from '../../styles/index';
import { Content, Header, Body, Text, Title } from 'native-base';
import { LB } from '../../configs/index';
import { TournamentListComponent } from '../../components/index';
import store from "../../stores/index";
import { TournamentAction } from "../../actions/index";

export class TournamentList extends React.Component {

    constructor() {
        super();
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
            this.setState(store.getState().tournament);
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

    editTournament(tournamentId) {
        this.props.navigation.navigate('TournamentRegister', {tournamentId});
    }
    
    /**
     * @description render the template
     */
    render() {
        let renderedList = <Text>Is fetching</Text>;
        
        if (!this.state.isFetching) {
            if (this.state.hasError) {
                renderedList = <Text>Error here</Text>;
            } else {
                renderedList = <TournamentListComponent tournaments={this.state.tournaments} onItemPress={(tournamentId) => this.editTournament(tournamentId)} onItemLongPress={(tournamentId) => this.deleteTournament(tournamentId)}/>
            }
        }

        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.TOURNAMENT_LIST.TITLE")}</Title>
                    </Body>
                </Header>
                {renderedList}
            </Content>
        );
    }
}

export { TournamentList as Component };
