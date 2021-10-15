import React,{useEffect,useState} from "react";
import { View,Text,StyleSheet,FlatList,ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../store/actions/orders";
import Colors from "../constants/Colors";
const OrdersScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoaded(true);
        dispatch(fetchOrders()).then(()=>setIsLoaded(false))
    }, [dispatch])
    if(isLoaded){
        return(
            <View style={styles.centeredContent}>
                <ActivityIndicator size='large'color={Colors.primary}/>
            </View>
        );
    }
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
    centeredContent:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'50%'
    }  
});