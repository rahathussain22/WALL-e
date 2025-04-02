import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings, FileText } from 'lucide-react-native';  // Import lucide-react-native icons
import HomeScreen from '../screens/online_transaction_process/Home';
import Merchant from '../screens/Merchant';
import TransactionHistory from '../screens/TransactionHistory';
import AccountSettings from '../screens/AccountSettings';
import ScanScreen from '../screens/Scan'; // Your scan screen component

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#0095DA',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                },
                tabBarIcon: ({ color, size }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        IconComponent = <Home size={size} color={color} />;
                    } else if (route.name === 'Merchant') {
                        IconComponent = (
                            <Image
                                source={require('../../assets/merchant-icon.png')}
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: color,
                                    resizeMode: 'contain',
                                }}
                            />
                        );
                    } else if (route.name === 'TransactionHistory') {
                        IconComponent = <FileText size={size} color={color} />;
                    } else if (route.name === 'AccountSettings') {
                        IconComponent = <Settings size={size} color={color} />;
                    }

                    return (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            {IconComponent}
                        </View>
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Merchant"
                component={Merchant}
                options={{ tabBarLabel: 'Merchant' }}
            />
            {/* Floating Scan button in the 3rd position */}
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarLabel: '',
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                ...props.style,
                                position: 'absolute',
                                top: -30,  // Adjust to float above the other tabs
                                left: '50%',
                                transform: [{ translateX: -30 }], // Adjust to center the button
                                zIndex: 1, // Ensure it's above the other icons
                                backgroundColor: '#0095DA',
                                width: 70,  // Set width and height to ensure the button is circular
                                height: 70,
                                borderRadius: 40, // Half the width/height to make it round
                                alignItems: 'center',
                                justifyContent: 'center', // Center content vertically and horizontally
                            }}
                        >
                            <Image
                                source={require('../../assets/scan-icon.png')} // Your custom scan icon
                                style={{
                                    width: 30,  // Icon size (inside the button)
                                    height: 30,
                                    tintColor: 'white'
                                }}
                            />
                            {/* Optionally, you can add text if you want, but it will be centered */}
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>
                                SCAN
                            </Text>
                        </TouchableOpacity>
                    ),
                }}
            />

            <Tab.Screen
                name="TransactionHistory"
                component={TransactionHistory}
                options={{ tabBarLabel: 'History' }}
            />
            <Tab.Screen
                name="AccountSettings"
                component={AccountSettings}
                options={{ tabBarLabel: 'Account' }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
