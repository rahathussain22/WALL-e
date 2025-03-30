import { useEffect } from 'react';
import { TouchableOpacity,Text,StyleSheet} from 'react-native';

const  CustomButton = (props)=>{
    const btnText = props.text? props.text: "Default Text";

    return(
        <TouchableOpacity
        style={[styles.btn,props.style]}
        onPress= {props.onPress}
        >
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton;
const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#0095DA',
        paddingVertical:14,
        marginHorizontal:18,
        borderRadius:12
    },
    btnText:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontWeight:'600'
    }
})