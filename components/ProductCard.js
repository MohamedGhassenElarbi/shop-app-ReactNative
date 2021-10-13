import React from "react";
import { View,StyleSheet,ImageBackground,Text } from "react-native";
const ProductCard = (props) => {
    return(
        <View>
            <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage} >
                <View style={styles.titleBackground}>
                    <Text style={styles.productTitle}>{props.title}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}
export default ProductCard;
const styles = StyleSheet.create({
    bgImage:{
        flex:1,
        width:'100%',
        height:250,   
    },
    titleBackground:{
        marginTop:200,
        backgroundColor:'rgba(0,0,0,0.7)',
        height:50,
    },
    productTitle:{
        marginTop:10,
        color:'white',
        textAlign:'center',
        fontSize:20,
    },
});