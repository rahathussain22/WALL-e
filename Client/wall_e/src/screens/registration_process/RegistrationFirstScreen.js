import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import CustomButton from '../../components/CustomButton';
const RegistrationFirstScreen = (props) => {
  return (
    <View >

      {/* <Text style={styles.title} >Registration Dashboard</Text> */}
      <Text style={styles.welcomeText}>WELCOME ONBOARD!</Text>
      <Text style={styles.subtitle} >Just few steps to create a new account for FREE!</Text>

      <CustomButton
        text="Create User Account"
        onPress={() => {props.navigation.navigate("CreateUserAccount")}}
        style={{marginTop:'25%'}}
      />

      <CustomButton
        text="Create Merchant Account"
        onPress={() => {props.navigation.navigate("CreateMerchantAccount") }}
        style={{marginVertical:'12%'}}
      />

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
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    marginHorizontal: 30,
    fontWeight:'500'
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


export default RegistrationFirstScreen;
