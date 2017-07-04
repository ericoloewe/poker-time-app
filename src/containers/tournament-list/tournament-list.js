/**
 * Containers / TournamentList
 */

import * as React from "react";
import { styles } from "./tournament-list.styles";
import { TemplateBuilder } from '../../styles/index';
import { Content, Header, Body, Title } from 'native-base';
import { LB } from '../../configs/index';
import { TournamentListComponent } from '../../components/index';

export class TournamentList extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    resetState() {
        this.state = {
            tournaments: []
        }; 
    }

    bindEvents() {
    }
    
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.TOURNAMENT_LIST.TITLE")}</Title>
                    </Body>
                </Header>
                <TournamentListComponent />
            </Content>
        );
    }
}

export { TournamentList as Component };
