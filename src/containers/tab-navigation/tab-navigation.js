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
    tabBarPosition: 'bottom',
    tabBarOptions: {
      inactiveTintColor: "#656c66",
      activeTintColor: "#FFF",
      labelStyle: {
        color: "#656c66"
      },
      style: {
        backgroundColor: "#000"
      }
    }
});

export { MainTab };