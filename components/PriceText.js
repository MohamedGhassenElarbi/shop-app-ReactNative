import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Colors from "../constants/Colors";
const PriceText = (props) => {
    return(
        <View>
            <Text style={styles.text}>{props.text.toFixed(2)} $</Text>
        </View>
    );
}
export default PriceText;
const styles = StyleSheet.create({
    text:{
        color:Colors.secondary,
        fontWeight:'bold',
        fontSize:20,
    }
});