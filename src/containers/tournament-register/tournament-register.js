/**
 * Containers / TournamentRegister
 */

import * as React from "react";
import { styles } from "./tournament-register.styles";
import { TemplateBuilder } from '../../styles/index';
import { TournamentAction } from '../../actions/index';
import { LB } from '../../configs/index';
import store from "../../stores/index";
import { Switch } from "react-native";
import { Button, Content, Form, Label, Input, Item, Header, Body, Title, Text, Icon, Spinner } from 'native-base';

export class TournamentRegister extends React.Component {

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
            }
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

    buildFormComponent() {
        return <Form>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.NAME")}</Label>
                        <Input value={this.state.tournament.name} onChangeText={(name) => this.setModelProp({name})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.BUYN")}</Label>
                        <Input value={this.state.tournament.buyn} onChangeText={(buyn) => this.setModelProp({buyn})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.ONLINE")}</Label>
                        <Switch value={this.state.tournament.online} onValueChange={(online) => this.setModelProp({online})}/>
                    </Item>
                    <Item stackedLabel last>
                        <Label>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.DATE")}</Label>
                        <Input value={this.state.tournament.date} onChangeText={(date) => this.setModelProp({date})}/>
                    </Item>
                    <Button block style={styles.button} onPress={() => {this.submit()}}> 
                        <Text>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.FORM.BUTTON")}</Text>
                    </Button>
                </Form>;
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
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.TOURNAMENT_REGISTER.TITLE")}</Title>
                    </Body>
                </Header>
                {this.renderForm()}
            </Content>
        );
    }

    renderForm() {
        let renderedForm = <Spinner />;
        
        if (!this.state.isFinding) {
            if (this.state.hasError) {
                renderedForm = <ContainerErrorComponent />;
            } else {
                renderedForm = this.buildFormComponent();
            }
        }

        return renderedForm;
    }

    setModelProp(model) {
        this.setState({
            tournament: {
                ...(this.state.tournament),
                ...model
            }
        })
    }

    submit() {
        store.dispatch(TournamentAction.save(this.state.tournament));
        this.props.navigation.goBack();
    }
}

export { TournamentRegister as Component };
