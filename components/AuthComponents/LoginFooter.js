import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { Entypo } from '@expo/vector-icons'; 
const LoginFooter = () => {
    return(
        <View style={styles.container}>
            <View style={styles.social}>
                <View style={styles.socialElem}>
                    <Entypo name="facebook-with-circle" size={35} color={Colors.primary} />
                </View>
                <View style={styles.socialElem}>
                    <Entypo name="instagram-with-circle" size={35} color={Colors.primary}  />
                </View>
                <View style={styles.socialElem}>
                    <Entypo name="linkedin-with-circle" size={35} color={Colors.primary} />
                </View>
            </View>
        </View>
    );
}
export default LoginFooter;
const styles =StyleSheet.create({
    container:{
        height:50,
        backgroundColor:Colors.additional,
        marginTop:16,
        borderTopLeftRadius:60,
        borderTopRightRadius:-60,
    },
    social:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:7,
    },
    socialElem:{
        marginRight:10,
    }
});