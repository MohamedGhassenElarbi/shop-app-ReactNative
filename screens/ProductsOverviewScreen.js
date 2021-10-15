import React,{useEffect,useState} from "react";
import { View,Text,StyleSheet, FlatList, ActivityIndicator } from "react-native";
import HeaderCartButton from "../components/HeaderCartButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/products";
import ProductItem from "../components/ProductItem";
import Colors from "../constants/Colors";
const ProductOverviewScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)
    const products = useSelector(state => state.products.availableproducts)
    const dispatch =useDispatch();
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <HeaderCartButton navigation={navigation}/>
          ),
        });
      }, [navigation]);

      useEffect(() => {
        setIsLoading(true);
        dispatch(fetchProducts()).then(()=>setIsLoading(false));
        
      }, [dispatch])

    if(isLoading){
      return(
        <View style={styles.centeredContent}>
          <ActivityIndicator size='large'color={Colors.primary}/>
        </View>
      );
    }
    if(!isLoading&&products.length===0){
      return(
        <View style={styles.centeredContent}>
          <Text style={styles.errorMessage}>No products found</Text>
        </View>
      );
    }
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
    centeredContent:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:'50%'
    },
    errorMessage:{
      color:'red',
      fontSize:17,
      fontWeight:'600'
    }
});