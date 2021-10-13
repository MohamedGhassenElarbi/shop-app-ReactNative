import React from "react";
import { TouchableOpacity, View,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
const HeaderCartButton = ({navigation}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <View style={styles.cart}>
            <AntDesign name="shoppingcart" size={30} color="white" />
        </View>
        </TouchableOpacity>
    );
}
export default HeaderCartButton;
const styles = StyleSheet.create({
    cart:{
        marginRight:20,
    }
});