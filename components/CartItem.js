import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import DeleteItemCart from "./DeleteItemCart";
const CartItem = (props) => {
    return(
        <View style={styles.container}>
            <Text>{props.item.quantity}</Text>
            <Text>{props.item.productTitle}</Text>
            <Text>{props.item.productPrice}</Text>
            <DeleteItemCart id={props.item.id}/>
        </View>
    );
}
export default CartItem;
const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:10,
        borderWidth:0.5,
        padding:20,
        borderColor:Colors.secondary,
        borderRadius:10,
    }
})