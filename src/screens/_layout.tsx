import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../type";
import HomeScreen from "./HomeScreen";
import ConverterScreen from "./ConverterScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppLayout = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShadowVisible: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Converter"
                    component={ConverterScreen}
                    options={({ route }) => ({ 
                        title: route.params.unitType 
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppLayout;