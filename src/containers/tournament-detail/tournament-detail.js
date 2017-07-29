/**
 * Containers / TournamentDetail
 */

import * as React from "react";
import { Alert } from 'react-native';
import { Content, Header, Body, Button, Icon, Text, Title, Spinner } from 'native-base';
import { styles } from "./tournament-detail.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { TournamentDetailComponent, ContainerErrorComponent } from '../../components/index';
import store from "../../stores/index";
import { TournamentAction } from "../../actions/index";

export class TournamentDetail extends React.Component {

    constructor() {
        super();
        this.resetState();
    }

    resetState() {
        this.state = {
            tournament: {
                name: "",
                buyn: "",
                online: false,
                date: ""
            },
            isFinding: true,
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
        let actualTournamentId = this.getActualTournamentId();

        if (actualTournamentId !== null) {
            store.dispatch(TournamentAction.find(this.getActualTournamentId()));
        }
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

    editTournament(tournamentId) {
        this.props.navigation.navigate('TournamentRegister', {tournamentId});
    }
    
    getActualTournamentId() {
        const {state} = this.props.navigation;
        let actualTournamentId = null;

        if (!!state && !!state.params && !!state.params.tournamentId) {
            actualTournamentId = state.params.tournamentId;
        }

        return actualTournamentId;
    }

    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.TOURNAMENT_DETAIL.TITLE")}</Title>
                    </Body>
                </Header>
                {this.renderDetails()}
                {this.renderEditButton()}
                {this.renderDeleteButton()}
            </Content>
        );
    }

    renderDetails() {
        let renderedDetail = <Spinner />;
        
        if (!this.state.isFinding) {
            if (this.state.hasError) {
                renderedDetail = <ContainerErrorComponent />;
            } else {
                renderedDetail = <TournamentDetailComponent tournament={this.state.tournament} style={styles.details} />;
            }
        }

        return renderedDetail;
    }

    renderEditButton() {
        let editButton = null;

        if (!this.state.isFinding && !this.state.hasError) {
            editButton = <Button dark bordered large iconLeft block style={styles.buttons} onPress={() => {this.editTournament(this.getActualTournamentId())}}>
                <Icon name='pencil' />
                <Text>{LB.build("CONTAINERS.TOURNAMENT_DETAIL.EDIT_BUTTON")}</Text>
            </Button>;
        }

        return editButton;
    }

    renderDeleteButton() {
        let deleteButton = null;

        if (!this.state.isFinding && !this.state.hasError) {
            deleteButton = <Button dark bordered large iconLeft block style={styles.buttons} onPress={() => {this.deleteTournament(this.getActualTournamentId())}}>
                <Icon name='trash' />
                <Text>{LB.build("CONTAINERS.TOURNAMENT_DETAIL.DELETE_BUTTON")}</Text>
            </Button>;
        }

        return deleteButton;
    }
}

export { TournamentDetail as Component };
