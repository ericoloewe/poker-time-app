/**
 * Containers / About
 */

import * as React from "react";
import { styles } from "./about.styles";
import { TemplateBuilder } from '../../styles/index';
import { Text } from 'native-base';

export class About extends React.Component {
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Text>Home</Text>
        );
    }
}

export { About as Component };
