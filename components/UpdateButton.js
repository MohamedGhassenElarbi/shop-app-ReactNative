import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import Colors from "../constants/Colors";
const UpdateButton = (props) => {
    return(
        <TouchableOpacity onPress={props.update}>
        <View>
            <FontAwesome5 name="tools" size={23} color={Colors.secondary}/>
        </View>
        </TouchableOpacity>
    );
}
export default UpdateButton;