import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import PriceText from "../components/PriceText";
import AddItemToCartButton from "../components/AddItemToCartButton";
import Colors from "../constants/Colors";
const ProductDetailScreen = ({route}) => {
    const {item} = route.params;
    return(
        <View>
            <Image source={{uri:item.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.price}><PriceText text={item.price}/></View>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.button}><AddItemToCartButton item={item}/></View>
        </View>
    );
}
export default ProductDetailScreen;
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250,
    },
    title:{
        fontSize:25,
        color:Colors.primary,
        textAlign:'center',
        marginVertical:20,
    },
    price:{
        alignItems:'flex-end',
        marginRight:20,
        marginBottom:15,
        
    },
    description:{
        marginHorizontal:15,
        fontSize:15,
    },
    button:{
        alignItems:'center',
        marginTop:20,
    }

});