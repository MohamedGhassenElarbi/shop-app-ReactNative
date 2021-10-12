import React from "react";
import { useDispatch } from "react-redux";
import {addToCart} from '../store/actions/cart';
import { View,Text,TouchableOpacity,StyleSheet,Alert} from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const AddItemToCartButton = (props) => {
    const dispatch=useDispatch();
    const dispatchAddToCartHandler = () => {
        dispatch(addToCart(props.item));
        Alert.alert("Great !","Product added successfully to your Cart",[{title:'Close'}]);
    }
    return(
        <TouchableOpacity onPress={dispatchAddToCartHandler}>
        <View style={styles.textBackground}>
            <MaterialCommunityIcons name="cart-plus" size={20} color='white'/>
            <Text style={styles.text}>ADD TO CART</Text>
        </View>
        </TouchableOpacity>
    );
}
export default AddItemToCartButton;
const styles= StyleSheet.create({
    text:{
        color:'white',
        
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