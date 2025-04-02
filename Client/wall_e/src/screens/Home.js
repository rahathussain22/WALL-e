import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';
import { Bell } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: 1,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Arfaat Hussain",
        phoneNumber: "03315183344"
    },
    {
        id: 2,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Rahat Hussain",
        phoneNumber: "03155802580"
    },
    {
        id: 3,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Arsalan Kharral",
        phoneNumber: "03312183140"
    },
    {
        id: 4,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Usman",
        phoneNumber: "03365383344"
    },
    {
        id: 5,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Danish",
        phoneNumber: "02517183314"
    },
    {
        id: 6,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Shahzaib",
        phoneNumber: "03325153394"
    },
    {
        id: 7,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Hassan",
        phoneNumber: "03325983344"
    },
    {
        id: 8,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Iqbal",
        phoneNumber: "03312183364"
    },
    {
        id: 9,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Raza",
        phoneNumber: "0345183344"
    },
    {
        id: 10,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Haider",
        phoneNumber: "02315183340"
    },
    {
        id: 11,
        profilePhoto: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" ,
        name: "Ulfat Hussain",
        phoneNumber: "03317383343"
    }
]
const Home = () => {
    const navigation = useNavigation();
    const [contacts, setContacts] = useState(data);
    useEffect(() => {
        // getUserContacts();
        
    }, [])

    function getUserContacts() {
        setContacts(data);
    }
    return (
        <View>
            <LinearGradient
                colors={['#004F74', '#0095DA']}
                style={{ height: 150, paddingTop: 20, paddingLeft: 5, paddingRight: 5 }}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}><Image style={{ height: 40, width: 40, borderRadius: 30, resizeMode: 'cover' }} source={require('../../assets/ulf.jpg')} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Wall-e Account</Text>
                    <Bell size={22} color={'white'} />
                    {/* 
        */}
                </View>

                <Text style={{ color: 'white', marginTop: 10, fontSize: 16, marginLeft: 10 }}>Rahat Hussain</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                    <Text style={{ color: 'white', marginTop: 5, flex: 1, fontSize: 16 }}>03135802580</Text>
                    <CustomButton
                        text="Sign In"
                        style={{ backgroundColor: '#3CBFFB', width: '25%', paddingVertical: 8 }}
                        onPress={() => {
                            navigation.navigate('AuthenticationNavigator', { screen: 'Login' });
                        }}
                    />
                </View>


            </LinearGradient>

            <View
                style={{ flexDirection: 'row', backgroundColor: '#0095DA', borderRadius: 14, marginTop: '7%', paddingVertical: 20 }}
            >
                <View
                    style={{ flex: 1, alignItems: 'center' }}
                >
                    <Text style={styles.walletText} >Online Wallet</Text>
                    <Text style={[styles.walletText, { fontWeight: '700', marginVertical: 5, fontSize: 18 }]}>****</Text>
                    <Image source={require('../../assets/send.png')}
                        style={{ height: 40, width: 40, resizeMode: 'cover' }}
                    />


                    <CustomButton
                        text="Add Cash"
                        style={{ backgroundColor: "#3CBFFB", width: '40%', marginVertical: 10, paddingVertical: 8 }}
                        textStyle={{ fontSize: 13 }}
                        onPress = {()=>navigation.navigate("TransactionNavigator",{
                            screen:'SearchContact',
                            params: {
                                contacts: contacts
                            }
                        })}
                    />
                </View>

                <View
                    style={{ flex: 1, alignItems: 'center' }}
                >
                    <Text style={styles.walletText}>Offline Wallet</Text>
                    <Text style={[styles.walletText, { fontWeight: '700', fontSize: 18, marginVertical: 5 }]}>Rs. 000</Text>
                    <Image source={require('../../assets/send.png')}
                        style={{ height: 40, width: 40, resizeMode: 'cover' }}
                    />

                    <CustomButton
                        text="Add Cash"
                        style={{ backgroundColor: "#3CBFFB", width: '40%', marginVertical: 10, paddingVertical: 8 }}
                        textStyle={{ fontSize: 13 }}
                        onPress = {()=>navigation.navigate("TransactionNavigator",{
                            screen:'SearchContact',
                            params: {
                                contacts: contacts
                            }
                        })}
                    />
                </View>
            </View>


        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    walletText: {
        color: 'white',
        fontSize: 16,
    }
})