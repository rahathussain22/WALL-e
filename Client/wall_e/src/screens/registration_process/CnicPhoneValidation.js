import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Toast from 'react-native-simple-toast';


const CnicPhoneValidation = (props) => {
    const [cnic, setCnic] = useState("");
    const [number,setNumber] = useState("");

    function handleOnPress(){
        if(cnic.length < 13){
            Toast.show("Please enter valid CNIC");
            return;
        }

        if(number.length < 10){
            Toast.show("Please enter valid Phone number");
            return;
        }
        Toast.show("All OK");
        props.navigation.navigate("OtpVerification");
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.content}>
                <Text style={styles.subtitle}>Just few steps to create a new account for FREE!</Text>

                <View style={{ marginTop: '5%', paddingHorizontal: 10 }}>
                    {/* CNIC Input */}
                    <Text style={styles.inputLabel}>Enter your CNIC</Text>
                    <TextInput
                        style={styles.input}
                        value={cnic}
                        onChangeText={setCnic} // Format CNIC as user types
                        keyboardType="numeric"
                        placeholder="XXXXX-XXXXXXX-X"
                        maxLength={15}
                    />

                    <View
                        style={{ borderColor: '#0095DA', borderWidth: 2, flexDirection: 'row', borderRadius: 13, height: 60, paddingRight:10 }}
                    >
                        <Text
                            style={{ backgroundColor: '#0095DA', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: '25%', textAlign: 'center', textAlignVertical: 'center', color: 'white', fontSize: 18 }}
                        >
                            +92
                        </Text>
                        <TextInput
                        style={{height:60,paddingLeft:10,fontSize:18,flex:1}}
                            value={number}
                            onChangeText={setNumber}
                            keyboardType="numeric"
                            maxLength={10}
                        />
                    </View>

                    <Text style={{ fontWeight: '600', marginTop: 30 }}>
                        With Login or Register, you accept the terms of use and our privacy policy.
                    </Text>
                </View>

                <CustomButton
                    text="Verify"
                    style={{ marginTop: '5%' }}
                    onPress = {handleOnPress}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
        marginTop: 20
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#0095DA',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        color: '#333',
        marginBottom: 20,
        paddingVertical: 13,
        paddingHorizontal: 10
    },
    termsText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#0095DA',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CnicPhoneValidation;
