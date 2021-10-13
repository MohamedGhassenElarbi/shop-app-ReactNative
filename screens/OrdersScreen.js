import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";
const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.orders)
    console.log(orders);
    
    return(
        <View>
            <FlatList data={orders} renderItem={({item})=>{
                return(<OrderItem item={item} date={item.readableDate}/>);
               
            }}/>
        </View>
    );
}
export default OrdersScreen;
const styles = StyleSheet.create({
    
});