/**
 * Containers / TournamentRegister
 */

import * as React from "react";
import { styles } from "./tournament-register.styles";
import { TemplateBuilder } from '../../styles/index';
import { TournamentAction } from '../../actions/index';
import { LB } from '../../configs/index';
import store from "../../stores/index";
import { Button, Content, Form, Label, Input, Item, Header, Body, Title, Text, Icon } from 'native-base';

export class TournamentRegister extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    resetState() {
        this.state = {
            name: "",
            buyn: "",
            date: ""
        }; 
    }

    bindEvents() {
        this.bindTournamentsUpdateEvent();
    }

    bindTournamentsUpdateEvent() {
        this.unsubscribe = store.subscribe(() => {
            let {tournament} = store.getState().tournament;

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
        const {state} = this.props.navigation;

        if (!!state && !!state.params && !!state.params.tournamentId) {
            store.dispatch(TournamentAction.find(state.params.tournamentId));
        }
    }
    
    /**
     * @description render the template
     */
    render() {
        let renderedForm = <Text>Is finding</Text>;
        
        if (!this.state.isFinding) {
            if (this.state.hasError) {
                renderedForm = <Text>Error here</Text>;
            } else {
                renderedForm = this.renderForm();
            }
        }

        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.TITLE")}</Title>
                    </Body>
                </Header>
                {renderedForm}
            </Content>
        );
    }

    renderForm() {
        return <Form>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.NAME")}</Label>
                        <Input value={this.state.name} onChangeText={(name) => this.setState({name})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.BUYN")}</Label>
                        <Input value={this.state.buyn} onChangeText={(buyn) => this.setState({buyn})}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.DATE")}</Label>
                        <Input value={this.state.date} onChangeText={(date) => this.setState({date})}/>
                    </Item>
                    <Button block style={styles.button} onPress={() => {this.submit()}}> 
                        <Text>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.BUTTON")}</Text>
                    </Button>
                </Form>;
    }

    submit() {
        store.dispatch(TournamentAction.save({
            id: this.state.id,
            name: this.state.name,
            buyn: this.state.buyn,
            date: this.state.date
        }));

        this.props.navigation.goBack();
    }
}

export { TournamentRegister as Component };
