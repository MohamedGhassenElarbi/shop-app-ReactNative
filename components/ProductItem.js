import React from "react";
import { View,ImageBackground,Text,StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import AddToCartButton from "./AddToCartButton";
import PriceText from "./PriceText";
import DetailsButton from "./DetailsButton";
const ProductItem = (props) => {
    return(
        <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail',{item:props.item})}>
        <View style={styles.container}>
            <ImageBackground source={{uri: props.item.imageUrl}} style={styles.bgImage} >
                <View style={styles.titleBackground}>
                    <Text style={styles.productTitle}>{props.item.title}</Text>
                </View>
            </ImageBackground>
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
    bgImage:{
        flex:1,
        width:'100%',
        height:250,   
    },
    productTitle:{
        marginTop:10,
        color:'white',
        textAlign:'center',
        fontSize:20,
    },
    titleBackground:{
        marginTop:200,
        backgroundColor:'rgba(0,0,0,0.7)',
        height:50,
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:10,
    }
});