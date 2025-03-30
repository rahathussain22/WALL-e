import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import Icon library for cross icon

function DialogBox({ isVisible, onClose, text }) {
    const navigation = useNavigation();

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                
                {/* Close button */}
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Icon name="close" size={35} color="gray" />
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require("../../assets/account_creation.png")}
                        style={{ height: 250, width: 250, resizeMode: 'cover' }}
                    />
                </View>
                <Text style={{ marginTop: 20, paddingHorizontal: 10, textAlign: 'justify' }} >{text}</Text>

                <CustomButton
                    text="Login"
                    style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </Modal>
    );
}

const styles = {
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1, // Ensure it's on top of the modal content
    },
};

export default DialogBox;
