import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
const HeaderCartButton = ({navigation}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <View>
            <AntDesign name="shoppingcart" size={30} color="white" />
        </View>
        </TouchableOpacity>
    );
}
export default HeaderCartButton;