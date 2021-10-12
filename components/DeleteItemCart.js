import React from "react";
import { View ,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions/cart";

const DeleteItemCart = (props) => {
    const dispatch = useDispatch();
    const dispatchDeleteCartItemHandler =()=> {
        dispatch(removeFromCart(props.id))
    }
    return(
        <TouchableOpacity onPress={dispatchDeleteCartItemHandler}>
        <View>
            <AntDesign name="delete" size={24} color='red' />
        </View>
        </TouchableOpacity>
    );
}
export default DeleteItemCart;