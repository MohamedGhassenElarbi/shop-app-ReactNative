import React from "react";
import { View,StyleSheet,TextInput,Alert, ScrollView,Text } from "react-native";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useDispatch } from "react-redux";
import {createProduct,updateProduct} from '../store/actions/products'
import { Formik } from "formik";
import * as yup from 'yup';
const productSchema = yup.object({
    title:yup.string().required(),
    description:yup.string().required(),
    imageUrl:yup.string().required(),
    price:yup.string().required(),
});
const EditProductScreen = ({route,navigation}) => {
    if(!route.params.item){
        React.useLayoutEffect(() => {
        navigation.setOptions({
            title:'Add new Product',
        });
        },);
    }
    const dispatch = useDispatch()
    const addProductHandler =(title,description,imageUrl,price)=> {
        dispatch(createProduct(title,description,imageUrl,+price));
        Alert.alert("Great !","Product added successfully",[{title:'Close'}]);
        navigation.navigate('userProducts');
    }
    const updateProductHandler =(title,description,imageUrl)=> {
        dispatch(updateProduct(route.params.item.id,title,description,imageUrl));
        Alert.alert("Great !","Product updated successfully",[{title:'Close'}]);
        navigation.navigate('userProducts');
    }
    return(
        <ScrollView>
        <View>
            <Formik
                initialValues={{ 
                    title: route.params.item?route.params.item.title:'',
                    imageUrl:route.params.item?route.params.item.imageUrl:'',
                    price:route.params.item?route.params.item.price.toString():'',
                    description:route.params.item?route.params.item.description:''
                 }}
                validationSchema={productSchema}
                onSubmit={values => 
                    route.params.item?updateProductHandler(values.title,values.description,values.imageUrl):addProductHandler(values.title,values.description,values.imageUrl,values.price)
                }
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                style={styles.input}
                />
                <Text style={styles.error}>{touched.title&&errors.title}</Text>
                </View>

                <View style={styles.inputContainer}>
                <Text style={styles.label}>Image Url</Text>
                <TextInput
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                style={styles.input}
                />
                <Text style={styles.error}>{touched.imageUrl&&errors.imageUrl}</Text>
                </View>
                
                {!route.params.item?
                (<View style={styles.inputContainer}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                style={styles.input}
                keyboardType='decimal-pad'
                />
                <Text style={styles.error}>{touched.price&&errors.price}</Text>
                </View>):null
                }
                
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                style={styles.input}
                />
                <Text style={styles.error}>{touched.description&&errors.description}</Text>
                </View>
                
                <View style={styles.button}>
                {!route.params.item?<CustomButton title='Add Product' press={handleSubmit}>
                    <Ionicons name="add-circle-outline" size={30} color="white" />
                    </CustomButton>:
                    <CustomButton title='Edit Product'press={handleSubmit}>
                        <FontAwesome5 name="tools" size={20} color="white"/>
                    </CustomButton>
                }
                </View>
            </View>
            )}
            </Formik>
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
        padding:8,
    },
    button:{
        marginTop:8,
        alignItems:'center',
    },
    error:{
        color:'red',
        marginLeft:10,
        marginTop:5,
    }
});