import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity, View,Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import {addToCart} from '../store/actions/cart';
const AddToCartButton = (props) => {
    const dispatch=useDispatch();
    const dispatchAddToCartHandler = () => {
        dispatch(addToCart(props.item));
        Alert.alert("Great !","Product added successfully to your Cart",[{title:'Close'}]);
    }
    return(
        <TouchableOpacity onPress={dispatchAddToCartHandler}>
        <View>
            <MaterialCommunityIcons name="cart-plus" size={30} color={Colors.secondary}/>
        </View>
        </TouchableOpacity>
    );
}
export default AddToCartButton;