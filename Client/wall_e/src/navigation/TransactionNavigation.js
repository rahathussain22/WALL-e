import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/online_transaction_process/Home";
import SearchContact from "../screens/online_transaction_process/SearchContact";
const Stack = createNativeStackNavigator();

const TransactionNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName="Home"
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
                component={SearchContact}
                name="SearchContact"
                options={{
                    headerTitle: "Select a Contact"
                }}
            />

        </Stack.Navigator>
    )
}

export default TransactionNavigator;