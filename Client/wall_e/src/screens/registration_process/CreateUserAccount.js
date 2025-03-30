import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from '../../components/CustomButton';

const CreateUserAccount = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.content}>
                {/* Welcome Text */}
                <Text style={styles.welcomeText}>WELCOME ONBOARD!</Text>
                <Text style={styles.subtitle}>Just few steps to create a new account for FREE!</Text>

                <View style={{ marginTop: '5', paddingHorizontal: 10 }}>
                    {/* Name Input */}
                    <Text style={[styles.inputLabel, { marginTop: 0 }]}>Please enter your Name as per CNIC or Form-B</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />

                    {/* Email Address Input */}
                    <Text style={styles.inputLabel}>E-mail Address</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                       
                    <CustomButton
                        text="Next"
                        style={{ marginTop: '5%' }}
                        onPress = {()=>props.navigation.navigate("CnicPhoneValidation")}
                    />
                </View>
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
        // color: '#0095DA',
        marginBottom: 10,
        textAlign:'center',
        marginTop:20
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        // textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#0095DA',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        color: '#333',
        marginBottom: 20,
        paddingVertical:13,
        paddingHorizontal:10
    },
    cnicWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    cnicInput: {
        backgroundColor: 'white',
        borderColor: '#0095DA',
        borderWidth: 2,
        borderRadius: 8,
        height: 50,
        width: '8%',
        textAlign: 'center',
        fontSize: 20,
        color: '#333',
    },
    termsText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginVertical: 20,
    },
    linkText: {
        color: '#0095DA',
        textDecorationLine: 'underline',
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

export default CreateUserAccount;
