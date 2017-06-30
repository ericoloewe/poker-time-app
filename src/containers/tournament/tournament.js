/**
 * Containers / Tournament
 */

import * as React from "react";
import { styles } from "./tournament.styles";
import { TemplateBuilder } from '../../styles/index';
import { LB } from '../../configs/index';
import { Button, Content, Header, Body, Title, Text, Icon } from 'native-base';

export class Tournament extends React.Component {
    
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content>
                <Header>
                    <Body>
                        <Title>{LB.build("CONTAINERS.TOURNAMENT.TITLE")}</Title>
                    </Body>
                </Header>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('TournamentRegister')}}> 
                    <Icon name='paper' />
                    <Text>{LB.build("CONTAINERS.TOURNAMENT.REGISTER")}</Text>
                </Button>
                <Button large iconLeft block onPress={() => {this.props.navigation.navigate('TounamentList')}}> 
                    <Icon name='grid' />
                    <Text>{LB.build("CONTAINERS.TOURNAMENT.LIST")}</Text>
                </Button>
            </Content>
        );
    }
}

export { Tournament as Component };
