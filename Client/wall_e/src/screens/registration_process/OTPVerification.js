import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../components/CustomButton';

const OtpVerification = (props) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(60); // Timer set to 2 minutes (120 seconds)
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [otpGenerated, setOtpGenerated] = useState(""); // Stores the generated OTP
    const [otpVerified, setOtpVerified] = useState(false); // Stores OTP verification status

    // Create refs for each OTP input field dynamically using useRef
    const inputRefs = useRef(otp.map(() => React.createRef()));

    // Function to handle OTP input
    const handleOtpChange = (text, index) => {
        let updatedOtp = [...otp];
        updatedOtp[index] = text;
        setOtp(updatedOtp);

        // Automatically focus the next input
        if (text && index < otp.length - 1) {
            inputRefs.current[index + 1].current.focus();
        }
    };

    // Countdown timer function
    useEffect(() => {
        if (isTimerRunning && timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (timer === 0 && !otpVerified) {
            Toast.show("Time Expired. Please resend the code.");
        }
    }, [isTimerRunning, timer]);

    const generateOtp = () => {
        const otp = Math.floor(1000 + Math.random() * 9000); // Random 4-digit OTP
        console.log("OTP Generated: ",otp);
        
        setOtpGenerated(otp.toString());
    };

    const handleResendCode = () => {
        generateOtp(); 
        setTimer(120); 
        setIsTimerRunning(true); 
        setOtpVerified(false); 
        setOtp(["", "", "", ""]); 
        Toast.show("New OTP sent!");
    };

    useEffect(() => {
        generateOtp(); // Generate OTP when the component loads
    }, []);

    // Function to handle OTP verification when the user presses the "Submit" button
    function handleOnPress() {
        const enteredOtp = otp.join(""); // Join OTP input fields into one string
        if (enteredOtp === otpGenerated) {
            setOtpVerified(true);
            setIsTimerRunning(false); // Stop the timer
            Toast.show("OTP Verification Successful!");
            props.navigation.navigate("CreatePin");
        } else {
            Toast.show("Incorrect OTP. Please try again.");
        }
    }


    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                // Focus on the previous input if the current one is empty
                inputRefs.current[index - 1].current.focus();
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={styles.subtitle}>OTP code has been sent to +92-3135802580, enter the code below to continue.</Text>

                <View style={styles.otpWrapper}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs.current[index]} // Reference to each input field dynamically
                            style={styles.otpInput}
                            value={digit}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType="next"
                            onKeyPress={(e)=>handleKeyPress(e,index)}
                        />
                    ))}
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.timer}>
                        {timer < 10 ? `00:0${timer}` : `00:${timer}`}
                    </Text>

                    {timer === 0 && !otpVerified ? (
                        <Text style={styles.timeoutMessage}>Time expired. Please resend the code.</Text>
                    ) : null}

                    <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
                        <Text style={styles.resendText}>Resend code</Text>
                    </TouchableOpacity>
                </View>

                <CustomButton
                    text="Submit"
                    style={{ marginTop: '20%' }}
                    onPress={handleOnPress} // Trigger OTP verification on button press
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
});

export default OtpVerification;
