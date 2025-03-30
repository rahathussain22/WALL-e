import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../components/CustomButton';

const CreatePin = () => {
    const [pin, setPin] = useState(["", "", "", ""]);
    const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);

    // Create refs for each PIN input field dynamically using useRef
    const inputRefsForPin = useRef(pin.map(() => React.createRef()));
    const inputRefsForConfirmPin = useRef(confirmPin.map(() => React.createRef()));

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

    // Function to handle Confirm PIN input
    const handleConfirmPinChange = (text, index) => {
        let updatedConfirmPin = [...confirmPin];
        updatedConfirmPin[index] = text;
        setConfirmPin(updatedConfirmPin);

        // Automatically focus the next input
        if (text && index < confirmPin.length - 1) {
            inputRefsForConfirmPin.current[index + 1].current.focus();
        }
    };

    // Function to handle key press (including backspace)
    const handleKeyPress = (e, index, array, setArray, refs) => {
        // Detect backspace key press
        if (e.nativeEvent.key === 'Backspace' && array[index] === '') {
            // Focus on previous input when backspace is pressed on empty field
            if (index > 0) {
                refs.current[index - 1].current.focus();
            }
        }
    };

    // Function to handle PIN submission
    function handleOnPress() {
        const enteredPin = pin.join("");
        const confirmedPin = confirmPin.join("");

        if (enteredPin === confirmedPin) {
            // Success if both PINs match
            Toast.show("PIN Verified Successfully!");
        } else {
            // Show error if PINs do not match
            Toast.show("PINs do not match. Please try again.");
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={styles.subtitle}>Just One More Step to complete Account Registration</Text>

                <Text style={styles.inputLabel}>Create a PIN</Text>
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
                            onKeyPress={(e) => handleKeyPress(e, index, pin, setPin, inputRefsForPin)}
                        />
                    ))}
                </View>

                <Text style={[styles.inputLabel, { marginTop: 30 }]}>Enter Again</Text>
                <View style={styles.otpWrapper}>
                    {confirmPin.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefsForConfirmPin.current[index]} // Reference to each input field dynamically
                            style={styles.otpInput}
                            value={digit}
                            onChangeText={(text) => handleConfirmPinChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType="done"
                            onKeyPress={(e) => handleKeyPress(e, index, confirmPin, setConfirmPin, inputRefsForConfirmPin)}
                        />
                    ))}
                </View>

                <CustomButton
                    text="Submit"
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
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 40,
        marginTop: 10,
    },
    otpWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginBottom: 20,
        marginHorizontal: 20
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
    timer: {
        fontSize: 26,
        color: '#333',
        marginTop: 20,
    },
    successMessage: {
        fontSize: 18,
        color: 'green',
        marginTop: 20,
    },
    timeoutMessage: {
        fontSize: 16,
        color: 'red',
        marginTop: 20,
    },
    resendButton: {
        marginTop: 30,
    },
    resendText: {
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    inputLabel: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '700'
    }
});

export default CreatePin;
