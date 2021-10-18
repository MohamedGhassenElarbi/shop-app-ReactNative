import React from "react";
import { View,StyleSheet,TouchableOpacity,Text } from "react-native";
import Colors from "../../constants/Colors";
const SignInSignUpButton = (props) => {
    return(
        <TouchableOpacity onPress={props.press}>
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
}
export default SignInSignUpButton;
const styles =StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:Colors.primary,
        padding:12,
        marginHorizontal:90,
        borderRadius:20,
        
    },
    text:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
    
    }
});
