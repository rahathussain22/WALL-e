import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const RegistrationDashboard = () => {
  return (
    <View>

     
      <Text style={styles.title} >Registration Dashboard</Text>
      <Text style={styles.welcomeText}>WELCOME ONBOARD!</Text>
      <Text >Just few steps to create a new account for FREE!</Text>

      <Button title="Create User Account" />
      <Button title="Create User Account" />
      
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#0095DA',  // Updated color
    width: '100%',
    textAlign: 'center',
    padding: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0095DA',  // Updated color
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});


export default RegistrationDashboard;
