import React from'react';
import { View,StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const HeaderAddButton = ({navigation}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('EditProduct',null)}>
        <View style={styles.add}>
            <Ionicons name="add-circle-outline" size={40} color="white" />
        </View>
        </TouchableOpacity>
    );
}
export default HeaderAddButton;
const styles = StyleSheet.create({
    add:{
        marginRight:10,
    }
});