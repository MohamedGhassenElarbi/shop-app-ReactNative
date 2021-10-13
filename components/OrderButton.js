import React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Alert} from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from '@expo/vector-icons'; 
const OrderButton = (props) => {
    return(
        <TouchableOpacity onPress={props.order}>
        <View style={styles.textBackground}>
            <FontAwesome name="cart-arrow-down" size={20} color="white" />
            <Text style={styles.text}>Order Now</Text>
        </View>
        </TouchableOpacity>
    );
}
export default OrderButton;
const styles= StyleSheet.create({
    text:{
        color:'white',
        marginLeft:5,
    },
    textBackground:{
        backgroundColor:Colors.secondary,
        width:200,
        height:50,
        borderRadius:10,
        paddingTop:15,
        flexDirection:'row',
        justifyContent:'center'
    }
})