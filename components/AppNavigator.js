import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import Cooling from './Cooling';
import Heating from './Heating';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Cooling: { screen: Cooling},
  Heating: { screen: Heating}
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;