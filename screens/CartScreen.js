import React from "react";
import { View,Text,StyleSheet, FlatList,Alert } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import PriceText from '../components/PriceText';
import Colors from "../constants/Colors";
import CartItem from "../components/CartItem";
import OrderButton from "../components/OrderButton";
import {placeOrder} from "../store/actions/orders";
const CartScreen = () => {
    const items = useSelector(state => state.cart.items);
    const cartItems = useSelector(state => {
        const transformedCartItems=[];
        for(const key in state.cart.items){
            transformedCartItems.push({
                id:key,
                quantity:state.cart.items[key].quantity,
                productTitle: state.cart.items[key].productTitle,
                productPrice:state.cart.items[key].productPrice,
                sum:state.cart.items[key].sum
            });
        }
        return transformedCartItems;
    });
    
    const totalAmount =useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();
    const dispatchOrderHandler = () => {
        dispatch(placeOrder(cartItems,totalAmount));
        Alert.alert("Great !","Your Order was placed successfully",[{title:'Close'}]);
    }
    return(
        <View>
            <View style={styles.total}>
            <Text style={styles.label}>Total Amount :</Text>
            <PriceText text={totalAmount} />
            </View>
            <View style={styles.list}>
            <FlatList data={cartItems} renderItem={({item})=>{
                return(
                    <CartItem item={item}/>
                );
            }}/>
            </View>
            {(totalAmount>0)?
                <View style={styles.order}>
                    <OrderButton order={dispatchOrderHandler}/>
                </View>:null
            }
            
        </View>
    );
}
export default CartScreen;
const styles = StyleSheet.create({
    total:{
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    label:{
        color:Colors.secondary,
        fontSize:20,
    },
    list:{
        marginTop:15,
    },
    order:{
        alignItems:'center',
    }
});