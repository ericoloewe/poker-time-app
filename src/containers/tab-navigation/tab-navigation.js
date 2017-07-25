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
      inactiveTintColor: "#582d00",
      activeTintColor: "#3F1400",
      labelStyle: {
        color: "#582d00"
      },
      style: {
        borderTopColor: "#582d00",
        borderTopWidth: 5,
        backgroundColor: "#dbceaf"
      }
    }
});

export { MainTab };