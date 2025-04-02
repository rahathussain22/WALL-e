import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseAmount from "../screens/online_transaction_process/ChooseAmount";
import SearchContact from "../screens/online_transaction_process/SearchContact";
import SendAmount from "../screens/online_transaction_process/SendAmount";
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
                    headerTitle: "Wall-e Transfer"
                }}
            />

            <Stack.Screen
                name="ChooseAmount"
                component={ChooseAmount}
                options={{
                    headerTitle: "Wall-e Transfer"
                }}
            />

            <Stack.Screen
                name="SendAmount"
                component={SendAmount}
                options={{
                    headerTitle: "From Wall-e"
                }}
            />
        </Stack.Navigator>
    )
}

export default TransactionNavigator;