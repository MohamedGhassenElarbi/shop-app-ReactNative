import React,{useState} from "react";
import { View ,StyleSheet,Text, ScrollView} from "react-native";
import Colors from "../constants/Colors";
import OrderDetailsButton from './OrderDetailsButton';
const OrderItem = (props) => {
    const [open, setOpen] = useState(false);
    const toggleOpenDetailshandler = () => {
        setOpen(!open);
    }
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View><Text style={styles.text}>{props.item.totalAmount.toFixed(2)} $</Text></View>
                <View><Text style={styles.text}>{props.date}</Text></View>
            </View>
            <View>
                <OrderDetailsButton details={toggleOpenDetailshandler}/>
            </View>
            {open && <View> 
                {props.item.items.map((token)=>{
                    console.log(token);
                    return(<View key={token.id} style={styles.details}>
                            <Text>{token.quantity}</Text>
                            <Text >{token.productTitle}</Text>
                            <Text>{token.productPrice}$</Text>
                            <Text>{token.sum}$</Text>
                        </View>);
                })}
                </View>}
            
        </View>
    );
}
export default OrderItem;
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.additional,
        margin:20,
        marginVertical:10,
        padding:20,
        borderRadius:10,
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        paddingBottom:5,
    },
    text:{
        color:"white"
    },
    details:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        marginVertical:5,
    }

});