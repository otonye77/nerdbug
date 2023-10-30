import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../Screens/Profile/Profile";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator screenOptions={{
                headerTintColor: 'black'
             }}>
                <Stack.Screen name="Profile" component={ProfileScreen} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;