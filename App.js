import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/Navigation/HomeScreenNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  );
}
