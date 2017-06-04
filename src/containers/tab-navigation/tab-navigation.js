/**
 * Containers / Tab Navigation
 */
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Home, Settings } from "../../containers/index";
import { TemplateBuilder } from "../../styles/index";

const MainTab = TabNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: Settings,
  },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
});

export { MainTab };