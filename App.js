
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Home/Home';
import Main from './screen/Main/Main';
import BottomBar from './src/components/Global/BottomBar';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <BottomBar />
    </NavigationContainer>
  );
}

