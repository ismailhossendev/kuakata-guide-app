import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../../screen/Home/Home";
import Main from "../../../screen/Main/Main";
import Palaces from "../../../screen/Palaces/Palaces";

const tab = createBottomTabNavigator();
const BottomBar = () => {
    const displayStyle = (route) => {
        if (route.name === "Home") {
            return "none";
        } else if (route.name === "Palaces") {
            return "none";
        }
        return "flex";
    };
    return (
        <tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                display: displayStyle(route),
            }
        })}>
            <tab.Screen name="Home" component={Home} />
            <tab.Screen name="Palaces" component={Palaces} />
            <tab.Screen name="main" component={Main}

            />
        </tab.Navigator>
    );
};

export default BottomBar;