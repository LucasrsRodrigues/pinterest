import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="home"
        component={Home}
      />
    </Navigator>
  );
}
