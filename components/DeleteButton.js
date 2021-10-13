import React from "react";
import { View ,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const DeleteButton = (props) => {
    return(
        <TouchableOpacity onPress={props.delete}>
        <View>
            <AntDesign name="delete" size={24} color='red' />
        </View>
        </TouchableOpacity>
    );
}
export default DeleteButton;