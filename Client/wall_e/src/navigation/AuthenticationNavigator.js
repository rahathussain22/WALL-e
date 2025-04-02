import React from "react";
import RegistrationNavigator from "./RegistrationNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../screens/login/Login";
const Stack = createNativeStackNavigator()

const AuthenticationNavigator = ()=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#0095DA', // Set header background color to blue
                height: 60, // Increased height to 60 for better visibility
                paddingTop: 10,
            },
            headerTitleStyle: {
                fontWeight: '700',
                fontSize: 24
            },
            headerTitleAlign: 'center', // Center the title
            headerTintColor: 'white',
        }}
        >
            <Stack.Screen
            name="Login"
            component={Login}
            />
            <Stack.Screen 
            name="RegistrationFlow"
            component={RegistrationNavigator}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    )
}

export default AuthenticationNavigator;