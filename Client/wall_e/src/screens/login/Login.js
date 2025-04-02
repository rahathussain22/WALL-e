import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../components/CustomButton';
import DialogBox from '../../components/DialogBox';

const Login = (props) => {
    const [pin, setPin] = useState(["", "", "", ""]);

    const inputRefsForPin = useRef(pin.map(() => React.createRef()));

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && pin[index] === '') {
            if (index > 0) {
                // Focus on the previous input if the current one is empty
                inputRefsForPin.current[index - 1].current.focus();
            }
        }
    };
    // Function to handle PIN input
    const handlePinChange = (text, index) => {
        let updatedPin = [...pin];
        updatedPin[index] = text;
        setPin(updatedPin);

        // Automatically focus the next input
        if (text && index < pin.length - 1) {
            inputRefsForPin.current[index + 1].current.focus();
        }
    };

    // Function to handle PIN submission
    function handleOnPress() {
        console.log("Pin: ",props.route.params.pin);
        
        if(pin.join('') == props.route.params.pin){
            props.navigation.navigate("BottomTabNavigator",{
                screen: "Home"
            })
        }
        else{
            Toast.show("Wrong Pin")
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={styles.subtitle}>Welcome Back</Text>

                <Text style={styles.inputLabel} >Enter your mobile number</Text>

                <View
                    style={{ borderColor: '#0095DA', borderWidth: 2, flexDirection: 'row', borderRadius: 13, height: 60, paddingRight: 10, marginHorizontal: 18 }}
                >
                    <Text
                        style={{ backgroundColor: '#0095DA', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: '25%', textAlign: 'center', textAlignVertical: 'center', color: 'white', fontSize: 18 }}
                    >
                        +92
                    </Text>
                    <TextInput
                        style={{ height: 60, paddingLeft: 10, fontSize: 18, flex: 1 }}
                        // value={number}
                        // onChangeText={setNumber}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                </View>

                <Text style={[styles.inputLabel, { marginTop: 25 }]}>Please Enter Your Pin</Text>
                <View style={styles.otpWrapper}>
                    {pin.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefsForPin.current[index]} // Reference to each input field dynamically
                            style={styles.otpInput}
                            value={digit}
                            onChangeText={(text) => handlePinChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType="next"
                            onKeyPress={(e) => handleKeyPress(e, index)}
                        />
                    ))}
                </View>

                <View style={{flexDirection:'row',alignItems:'center', marginTop:'8%'}} >

              
                <Text>Don't have an account?</Text>

                <TouchableOpacity
                onPress={()=>props.navigation.navigate("AuthenticationNavigator",{screen: "RegistrationFlow"})}
                >
                    <Text style={{ fontWeight: '700', marginLeft: '10%', color:'blue'}} >Sign Up Now</Text>
                </TouchableOpacity>
                </View>

                <CustomButton
                    text="Confirm"
                    style={{ marginTop: '10%' }}
                    onPress={handleOnPress} // Trigger PIN verification on button press
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0095DA',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 40,
        marginTop: 10,
        textAlign: 'center'
    },
    otpWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 60,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        marginHorizontal: 10,
        color: '#333',
    },
    inputLabel: {
        fontSize: 22,
        // textAlign: 'center',
        marginBottom: 20,
        fontWeight: '700',
        marginLeft: 20
    },
    input: {
        borderColor: '#0095DA',
        borderWidth: 2,
        marginHorizontal: 18,
        borderRadius: 12,
        height: 60,
        fontSize: 18,
        paddingHorizontal: 10
    }
});

export default Login;
