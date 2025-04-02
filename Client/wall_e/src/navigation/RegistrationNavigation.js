import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateUserAccount from "../screens/registration_process/CreateUserAccount";
import CreateMerchantAccount from "../screens/registration_process/CreateMerchantAccount";
import RegistrationFirstScreen from "../screens/registration_process/RegistrationFirstScreen";
// import CnicValidation from "../screens/registration_process/CnicPhoneValidation";
import CnicPhoneValidation from "../screens/registration_process/CnicPhoneValidation";
import OtpVerification from "../screens/registration_process/OTPVerification";
import CreatePin from "../screens/registration_process/CreatePin";
import Login from "../screens/login/Login";


const Stack = createNativeStackNavigator();

const RegistrationNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="RegistrationFirstScreen"
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
                component={RegistrationFirstScreen}
                name="RegistrationFirstScreen"
                options={{
                    headerTitle: "Registration Dashboard",
                    // If there's any bottom header/tab, you can try disabling it for this screen
                    headerShown: true,
                }}
            />

            <Stack.Screen
                component={CreateUserAccount}
                name="CreateUserAccount"
                options={{
                    headerTitle: "Create User Account",
                    // Disable header if not needed
                    headerShown: true,
                }}
            />

            <Stack.Screen
                component={CreateMerchantAccount}
                name="CreateMerchantAccount"
                options={{
                    headerTitle: "Registration Dashboard",
                    // Disable header if not needed
                    headerShown: true,
                }}
            />

            <Stack.Screen
                component={CnicPhoneValidation}
                name="CnicPhoneValidation"
                options={{
                    headerTitle: "Registration Dashboard",
                    // Disable header if not needed
                    headerShown: true,
                }}
            />

            <Stack.Screen
                component={OtpVerification}
                name="OtpVerification"
                options={{
                    headerTitle: "Enter The OTP",
                    // Disable header if not needed
                    headerShown: true,
                }}
            />
            <Stack.Screen
                component={CreatePin}
                name="CreatePin"
                options={{
                    headerTitle: "Create The Pin Code",
                    // Disable header if not needed
                    headerShown: true,
                }}
            />
            
        </Stack.Navigator>
    )
}

export default RegistrationNavigator;
