import React,{useState} from "react";
import { View,Text,StyleSheet,TextInput,Alert, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useDispatch } from "react-redux";
import {createProduct,updateProduct} from '../store/actions/products'
const EditProductScreen = ({route,navigation}) => {
    //const {item} = route.params;
    const [title, setTitle] = useState(route.params.item?route.params.item.title:'');
    const [imageUrl, setImageUrl] = useState(route.params.item?route.params.item.imageUrl:'');
    const [price, setPrice] = useState(route.params.item?route.params.item.price.toString():'');
    const [description, setDescription] = useState(route.params.item?route.params.item.description:'');
    if(!route.params.item){
        React.useLayoutEffect(() => {
        navigation.setOptions({
            title:'Add new Product',
        });
        },);
    }
    const dispatch = useDispatch()
    const addProductHandler =()=> {
        dispatch(createProduct(title,description,imageUrl,+price));
        Alert.alert("Great !","Product added successfully",[{title:'Close'}]);
        navigation.navigate('userProducts');
    }
    const updateProductHandler =()=> {
        dispatch(updateProduct(route.params.item.id,title,description,imageUrl));
        Alert.alert("Great !","Product updated successfully",[{title:'Close'}]);
        navigation.navigate('userProducts');
    }
    return(
        <ScrollView>
        <View>
            {/*route.params.item?<Text>update</Text>:<Text>add</Text>*/}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Image Url</Text>
                <TextInput value={imageUrl} onChangeText={text => setImageUrl(text)} style={styles.input}/>
            </View>
            {!route.params.item?
                (<View style={styles.inputContainer}>
                <Text style={styles.label}>Price</Text>
                <TextInput value={price} onChangeText={text => setPrice(text)} style={styles.input}/>
                </View>):null
            }
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput value={description} onChangeText={text => setDescription(text)} style={styles.input}/>
            </View>
            <View style={styles.button}>
                {!route.params.item?<CustomButton title='Add Product' press={addProductHandler}>
                    <Ionicons name="add-circle-outline" size={30} color="white" />
                    </CustomButton>:
                    <CustomButton title='Edit Product'press={updateProductHandler}>
                        <FontAwesome5 name="tools" size={20} color="white"/>
                    </CustomButton>
                }
            </View>
        </View>
        </ScrollView>
    );
}
export default EditProductScreen;
const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        color:Colors.primary,
        fontSize:16,
    },
    inputContainer:{
        marginHorizontal:20,
        marginVertical:10,
    },
    input:{
        borderBottomWidth:1,
        padding:10,
    },
    button:{
        marginTop:15,
        alignItems:'center',
    }
});