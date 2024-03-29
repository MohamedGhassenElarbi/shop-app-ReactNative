import React from "react";
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import AddToCartButton from "./AddToCartButton";
import PriceText from "./PriceText";
import DetailsButton from "./DetailsButton";
import ProductCard from "./ProductCard";
const ProductItem = (props) => {
    return(
        <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail',{item:props.item})}>
        <View style={styles.container}>
            <ProductCard title={props.item.title} imageUrl={props.item.imageUrl}/>
            <View style={styles.details}>
                <DetailsButton navigation={props.navigation} item={props.item}/>
                <PriceText text={props.item.price}/>
                <AddToCartButton item={props.item}/>
            </View>

        </View>
        </TouchableOpacity>
    );
}
export default ProductItem;
const styles =StyleSheet.create({
    container:{
        width:340,
        height:300,
        borderWidth:1,
        borderColor:Colors.secondary,
        borderRadius:10,
        marginHorizontal:10,
        marginVertical:20, 
        overflow:"hidden",
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:260,
    }
});