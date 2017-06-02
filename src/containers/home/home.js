/**
 * Containers / Home
 */

import * as React from "react";
import { styles } from "./home.styles";
import { TemplateBuilder } from '../../styles/index';
import { Text } from 'native-base';

export class Home extends React.Component {
    /**
     * @description render the template
     */
    render() {
        return TemplateBuilder.extend(
            <Text>Home</Text>
        );
    }
}

export { Home as Component };
