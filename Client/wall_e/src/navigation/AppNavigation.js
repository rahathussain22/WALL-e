import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TransactionNavigator from "./TransactionNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from "./BottomTabNavigator";
import AuthenticationNavigator from "./AuthenticationNavigator";
const Stack = createNativeStackNavigator()
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="BottomTabNavigator"
            screenOptions={{
                headerShown:false
            }}
            >
                <Stack.Screen
                name="AuthenticationNavigator"
                component={AuthenticationNavigator}
                />
                <Stack.Screen
                name="TransactionNavigator"
                component={TransactionNavigator}
                />
                <Stack.Screen
                    name="BottomTabNavigator"
                    component={BottomTabNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;
