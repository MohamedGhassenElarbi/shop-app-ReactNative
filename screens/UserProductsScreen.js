import React from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import HeaderAddButton from "../components/HeaderAddButton";
import { useSelector } from "react-redux";
import UserProductItem from "../components/UserProductItem";
const UserProductsScreen = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.getParent().setOptions({
          headerRight: () => (
            <HeaderAddButton navigation={navigation}/>
          ),
        });
      }, [navigation]);
      const userProducts = useSelector(state => state.products.userProducts)
    return(
        <View>
            <FlatList data={userProducts} renderItem={({item})=>{
              return(
                <UserProductItem item={item} navigation={navigation}/>
              );
            }}/>
        </View>
    );
}
export default UserProductsScreen;
const styles = StyleSheet.create({
    
});