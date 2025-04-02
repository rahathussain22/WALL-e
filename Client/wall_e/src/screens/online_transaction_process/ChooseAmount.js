import { View, Text, StyleSheet, Image, TextInput, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import Toast from 'react-native-simple-toast'
const ChooseAmount = (props) => {
  const contact = props.route.params.contact;
  const [amount, setAmount] = useState();

  function handleOnPress() {
    // Check if amount is valid (only numbers, no symbols)
    const amountRegex = /^[0-9]+$/; // Regular expression to allow only numbers
  
    if (amount == 0 || !amountRegex.test(amount)) {
      ToastAndroid.show("Please enter a valid amount.", ToastAndroid.SHORT);
    } else {
      props.navigation.navigate("SendAmount", {
        contact: contact,
        amount: amount
      });
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={styles.subtitle}>Sending Amount to Wall-e Account</Text>

      <View
        style={{
          backgroundColor: '#0095DA',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 20,
          paddingHorizontal: 15,
          marginHorizontal: 10,
          borderRadius: 12
        }}
      >
        <Image source={{ uri: contact.profilePhoto }} style={styles.profileImage} />
        <View style={{ flex: 1, marginLeft: '3%' }}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}>{contact.name}</Text>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}>{contact.phoneNumber}</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#0095DA',
          marginVertical: 20,
          marginHorizontal: 10,
          borderRadius: 12,
          paddingHorizontal: 15,
          paddingVertical: 10
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>Enter Amount</Text>
        <View style={{ alignItems: 'center', marginTop: 15, marginBlock: 35 }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 80,
              width: 150,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TextInput
              placeholder='Rs. 0'
              placeholderTextColor={'black'}
              style={{ fontSize: 22, fontWeight: '600' }}
              value={amount}
              onChangeText={setAmount}
              keyboardType='numeric'
            />
          </View>
        </View>
      </View>

      <View style={styles.commentWrapper}>
        <TextInput
          placeholder='Leave a message'
          multiline={true}
          style={styles.commentInput}
        />
      </View>

      {/* Button Wrapper */}
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,  // Ensures it takes up the remaining space
          paddingBottom: 20 // Provides bottom spacing
        }}
      >
        <CustomButton
          text="Next"
          style={{ marginBottom: 0, backgroundColor: amount? '#0095DA':'#E7E6E6' }} 
          onPress = {handleOnPress}
          disabled = {amount? false: true}
        />
      </View>
    </ScrollView>
  )
}

export default ChooseAmount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: 'cover'
  },
  commentWrapper: {
    backgroundColor: '#E7E6E6',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: '25%',
    borderRadius: 15
  },
  commentInput: {
    fontSize: 16
  }
})
