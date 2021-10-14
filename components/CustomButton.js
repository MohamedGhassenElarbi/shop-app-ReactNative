import React from "react";
import { Text, View ,StyleSheet,TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";
const CustomButton = (props) => {
    return(
        
        <TouchableOpacity onPress={props.press}>
        <View style={styles.textBackground}>
            <View>{props.children}</View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
}
export default CustomButton;
const styles= StyleSheet.create({
    text:{
        color:'white',
        marginLeft:10,
    },
    textBackground:{
        backgroundColor:Colors.secondary,
        width:200,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },
    icon:{

    }
})