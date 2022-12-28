import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomBar from '../components/Global/BottomBar';

export default function MainStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home1'
        >
            <Stack.Screen name="Home1" component={BottomBar} />
        </Stack.Navigator>
    )
}