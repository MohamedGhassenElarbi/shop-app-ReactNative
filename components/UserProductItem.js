import React from "react";
import { View,StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import Colors from "../constants/Colors";
import PriceText from "./PriceText";
import DeleteButton from './DeleteButton';
import UpdateButton from "./UpdateButton";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions/products";
const UserProductItem = (props) => {
    const dispatch =useDispatch();
    const deleteProductHandler = () => {
        dispatch(deleteProduct(props.item.id));
    }
    const updateProductHandler = () => {
        props.navigation.navigate('EditProduct',{item:props.item});
    }
    return(
        <View style={styles.container}>
            <ProductCard title={props.item.title} imageUrl={props.item.imageUrl}/>
            <View style={styles.details}>
                <UpdateButton update={updateProductHandler}/>
                <PriceText text={props.item.price}/>
                <DeleteButton delete={deleteProductHandler}/>
            </View>
        </View>
    );
}
export default UserProductItem;
const styles=StyleSheet.create({
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