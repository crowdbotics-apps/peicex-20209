import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps100635Navigator from '../features/Maps100635/navigator';
import Add-Item100634Navigator from '../features/Add-Item100634/navigator';
import Maps100630Navigator from '../features/Maps100630/navigator';
import UserProfile100626Navigator from '../features/UserProfile100626/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps100635: { screen: Maps100635Navigator },
Add-Item100634: { screen: Add-Item100634Navigator },
Maps100630: { screen: Maps100630Navigator },
UserProfile100626: { screen: UserProfile100626Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
