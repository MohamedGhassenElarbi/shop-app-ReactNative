import React from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";
import HeaderCartButton from "../components/HeaderCartButton";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
const ProductOverviewScreen = ({navigation}) => {
    const products = useSelector(state => state.products.availableproducts)
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <HeaderCartButton navigation={navigation}/>
          ),
        });
      }, [navigation]);
    return(
        <View>
            <FlatList data ={products} 
                renderItem={({item})=>{
                    return(
                        <ProductItem item={item} navigation={navigation}/>
                    );
                }}
            />
        </View>
    );
}
export default ProductOverviewScreen;
const styles = StyleSheet.create({
    
});