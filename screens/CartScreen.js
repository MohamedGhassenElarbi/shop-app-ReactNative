import React from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PriceText from '../components/PriceText';
import Colors from "../constants/Colors";
import CartItem from "../components/CartItem";
const CartScreen = () => {
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
    
    const totlaAmount =useSelector(state => state.cart.totalAmount);
    return(
        <View>
            <View style={styles.total}>
            <Text style={styles.label}>Total Amount :</Text>
            <PriceText text={totlaAmount} />
            </View>
            <View style={styles.list}>
            <FlatList data={cartItems} renderItem={({item})=>{
                return(
                    <CartItem item={item}/>
                );
            }}/>
            </View>
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
    }
});