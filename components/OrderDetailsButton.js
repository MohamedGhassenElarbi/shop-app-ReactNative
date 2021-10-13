import React from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
const OrderDetailsButton = (props) => {
    return(
        <TouchableOpacity onPress={props.details}>
        <View>
            <Text style={styles.text}>Details</Text>
        </View>
        </TouchableOpacity>
    );
}
export default OrderDetailsButton;
const styles= StyleSheet.create({
    text:{
        color:Colors.primary,
        fontSize:18,
    }
});