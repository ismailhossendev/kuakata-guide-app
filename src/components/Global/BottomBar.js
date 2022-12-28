import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../../../screen/Main/Main";
import Palaces from "../../../screen/Palaces/Palaces";

const tab = createBottomTabNavigator();
const BottomBar = () => {

    return (
        <tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <tab.Screen name="Home" component={Main} />
            <tab.Screen name="Palaces" component={Palaces} />
        </tab.Navigator>
    );
};

export default BottomBar;