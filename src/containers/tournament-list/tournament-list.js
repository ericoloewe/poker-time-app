/**
 * Containers / TournamentList
 */

import * as React from "react";
import { Alert } from 'react-native';
import { styles } from "./tournament-list.styles";
import { TemplateBuilder } from '../../styles/index';
import { Content, Header, Body, Text, Title, Spinner } from 'native-base';
import { LB } from '../../configs/index';
import { TournamentListComponent, ContainerErrorComponent } from '../../components/index';
import store from "../../stores/index";
import { TournamentAction } from "../../actions/index";

export class TournamentList extends React.Component {

    constructor() {
        super();
        this.resetState();
    }

    resetState() {
        this.state = {
            tournaments: [],
            isFetching: true,
            hasError: false
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
        this.fetchList();
    }

    deleteTournament(tournamentId) {
        Alert.alert(LB.build("CONTAINERS.TOURNAMENT_LIST.DELETE.TITLE"), LB.build("CONTAINERS.TOURNAMENT_LIST.DELETE.SUB_TITLE"), [
            {
                text: LB.build("CONTAINERS.TOURNAMENT_LIST.DELETE.YES"),
                onPress: () => store.dispatch(TournamentAction.delete(tournamentId))
            },
            {
                text: LB.build("CONTAINERS.TOURNAMENT_LIST.DELETE.NO")
            }
        ]);
    }

    fetchList() {
        store.dispatch(TournamentAction.fetch());
    }

    goToTournamentDetail(tournamentId) {
        this.props.navigation.navigate('TournamentDetail', {tournamentId});
    }
    
    /**
     * @description render the template
     */
    render() {
        let renderedList = <Spinner />;
        
        if (!this.state.isFetching) {
            if (this.state.hasError) {
                renderedList = <ContainerErrorComponent />;
            } else {
                renderedList = <TournamentListComponent tournaments={this.state.tournaments} onItemPress={(tournamentId) => this.goToTournamentDetail(tournamentId)} onItemLongPress={(tournamentId) => this.deleteTournament(tournamentId)} onRefresh={() => this.onListRefresh()} />
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

    onListRefresh() {
        this.fetchList();
    }
}

export { TournamentList as Component };
