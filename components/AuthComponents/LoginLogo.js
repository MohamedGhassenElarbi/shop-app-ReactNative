import React from "react";
import { View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Entypo } from '@expo/vector-icons'; 
const LoginLogo = () =>{
    return(
        <View style={styles.container}>
        <View style={styles.cercle}>
        <Entypo name="shop" size={150} color="white" />
        </View>
        </View>
    );
}
export default LoginLogo;
const styles = StyleSheet.create({
    cercle:{
        width: 200,
        height: 200,
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: Colors.primary,
        marginVertical:50,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
});