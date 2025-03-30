import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';


const CreateMerchantAccount = (props) => {
    const [cnic, setCnic] = useState();
    const [email, setEmail] = useState("");
    const [shopName,setShopName] = useState("");
    const [shopAddress,setShopAddress] = useState("");
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 50}} style={{ paddingHorizontal: 20}} >
          
            <Text style={styles.welcomeText}>WELCOME ONBOARD!</Text>
            <Text style={styles.subtitle}>Please provide Shop details to become a Merchant with Wall-e</Text>

            <View style={{ marginTop: '2', paddingHorizontal: 10 }} >
                <Text style={[styles.inputLabel,{marginTop:0}]}>Please enter your Name as per CNIC or Form-B</Text>
                
                    <TextInput
                        style={styles.input}
                        value={cnic}
                        onChangeText={setCnic}
                    />

                <Text style={styles.inputLabel}>E-mail Address</Text>
                
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                <Text style={styles.inputLabel} >Shop Name as registered</Text>   

                <TextInput
                        style={styles.input}
                        value={shopName}
                        onChangeText={setShopName}
                    />

                <Text style={styles.inputLabel} >Shop Address</Text>  
                <TextInput
                        style={styles.input}
                        value={shopAddress}
                        onChangeText={setShopAddress}
                    />  
               
            </View>

            <Text style={{paddingHorizontal:15,fontWeight:'600',marginTop:15}} >Note: Shop Name will be considered as account title for transactions</Text>

            <CustomButton
            text = "Next"
            style={{marginTop:'5%'}}
            onPress = {()=>props.navigation.navigate("CnicPhoneValidation")}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 22,
        fontWeight: '700',
        marginVertical: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 5,
        fontWeight: '500'
    },
    input: {
        borderColor: '#0095DA',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        paddingVertical:14
    },
    inputLabel:{
        paddingBottom: 10, marginTop: 10, fontWeight: '500'
    }
});

export default CreateMerchantAccount;
