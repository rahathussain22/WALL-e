import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../../components/CustomButton';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import Icon library for cross icon

const SendAmount = (props) => {
    console.log("Params: ", props.route.params);
    const contact = props.route.params.contact;
    const amount = props.route.params.amount;
    const [showReceipt, setShowReceipt] = useState(true);

    const handleOnPress = () => {
        setShowReceipt(true)
    }
    return (
        <View style={{ flex: 1 }} >
            <View
                style={{ backgroundColor: '#E7E6E6', marginHorizontal: 10, borderRadius: 12, marginTop: '10%', paddingHorizontal: 15, paddingVertical: 15 }}
            >
                <Text style={{ color: '#2F2F2F', fontSize: 17, fontWeight: '600' }} >Transfer To</Text>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 10 }}
                >
                    <Text style={{ flex: 1 }} >Account Name</Text>
                    <Text>{contact.name}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{ flex: 1 }}>Account Number</Text>
                    <Text>{contact.phoneNumber}</Text>
                </View>
            </View>




            <View
                style={{ backgroundColor: '#E7E6E6', marginHorizontal: 10, borderRadius: 12, marginTop: '10%', paddingHorizontal: 15, paddingVertical: 15 }}
            >
                <Text style={{ color: '#2F2F2F', fontSize: 17, fontWeight: '600' }} >Payment Details</Text>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 10 }}
                >
                    <Text style={{ flex: 1 }} >Transfer Amount</Text>
                    <Text>Rs. {amount}</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 15 }}
                >
                    <Text style={{ flex: 1 }}>Tax</Text>
                    <Text>Rs. 0</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 15 }}
                >
                    <Text style={{ flex: 1 }}>Transfer Amount</Text>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }} >Rs. {amount}</Text>
                </View>
            </View>

            <Receipt isVisible={showReceipt} onClose={()=>setShowReceipt(false)} amount={amount} recipientName={contact.name} recipientPhoneNumber={contact.phoneNumber} transactionId={1} transactionType={'Online'} />

            <View
                style={{
                    justifyContent: 'flex-end',
                    flex: 1,  // Ensures it takes up the remaining space
                    paddingBottom: 20
                }}
            >
                <CustomButton
                    text="Next"
                    onPress={handleOnPress}

                />
            </View>
        </View>
    )
}

const Receipt = ({ isVisible, onClose, amount, recipientName, recipientPhoneNumber, transactionType, transactionId }) => {

    function getDate() {
        let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let currentDate = new Date();
        let customizeDate = `${currentDate.getDate()} ${monthsArray[currentDate.getMonth()]} ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`
        return customizeDate;
    }

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>

                        {/* Close button */}
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Icon name="close" size={35} color="gray" />
                        </TouchableOpacity>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image
                        source={require('../../../assets/transaction-icon.png')}
                        style={{ height: 40, width: 40, borderRadius: 20, resizeMode: 'cover' }}
                    />
                    <Text style={{ fontSize: 22, fontWeight: '600', marginLeft: '5%' }} > Wall-e</Text>
                </View>

                <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16, fontWeight: '500', marginBlock: 10 }} >Transaction Success!</Text>

                <Text style={{ textAlign: 'center', color: '#929292' }} >{getDate()}</Text>

                <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: '700', marginVertical: 20 }} >Rs. {amount}</Text>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{flex:1}} >Transaction ID</Text>
                    <Text>{transactionId}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{flex:1}} >Transaction Type</Text>
                    <Text>{transactionType}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{flex:1}} >Sender Account Title</Text>
                    <Text>Rahat Hussain</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{flex:1}} >Sender Account Number</Text>
                    <Text>03135802580</Text>
                </View>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{flex:1}} >Recipient</Text>
                    <Text>{recipientName}</Text>
                </View>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}
                >
                    <Text style={{flex:1}} >Recipient Account Number</Text>
                    <Text>{recipientPhoneNumber}</Text>
                </View>


                <CustomButton
                    text="Download"
                    style={{ marginTop: 20 }}
                />
            </View>
        </Modal>
    )
}
const styles = {
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1, // Ensure it's on top of the modal content
    },
};
export default SendAmount