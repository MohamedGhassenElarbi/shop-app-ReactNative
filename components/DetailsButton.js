import React from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Colors from "../constants/Colors";
const DetailsButton = (props) => {
    return(
        <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail',{item:props.item})}>
        <View>
            <Text style={styles.text}>Details</Text>
        </View>
        </TouchableOpacity>
    );
}
export default DetailsButton;
const styles = StyleSheet.create({
    text:{
        color:Colors.secondary,
        fontSize:18,
    }
});