/**
 * Containers / Bankhall
 */

import * as React from "react";
import { styles } from "./bankhall.styles";
import { TemplateBuilder } from '../../styles/index';
import { Content } from 'native-base';

export class Bankhall extends React.Component {

    constructor() {
        super();
        this.resetState();
        this.bindEvents();
    }

    resetState() {
        this.state = {}; 
    }

    bindEvents() {
    }
    
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Content> 
            </Content>
        );
    }
}

export { Bankhall as Component };
