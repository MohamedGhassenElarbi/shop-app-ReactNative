import React,{useState} from "react";
import { View,StyleSheet, Text,TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity,Button } from "react-native";
import LoginLogo from "../components/AuthComponents/LoginLogo";
import Colors from "../constants/Colors";
import SignInSignUpButton from "../components/AuthComponents/SignInSignUpButton";
import LoginFooter from "../components/AuthComponents/LoginFooter";
import { AntDesign } from '@expo/vector-icons'; 
import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/auth";
import { login } from "../store/actions/auth";
const loginSchema = yup.object({
    email:yup.string().required().email(),
    Password:yup.string().required().min(4),
});
const AuthScreen = () =>{
    const [showPassord, setShowPassord] = useState(false);
    const [signUpMode, setSignUpMode] = useState(false);
    const dispatch =useDispatch();
    const signUpHandler = (email,password) => {
        dispatch(signUp(email,password));
    }
    const loginHandler = (email,password) => {
        dispatch(login(email,password));
    }
    return(
        
        <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={10}>
        <ScrollView>
        <View>
            <View style={styles.logoContainer}>
                <LoginLogo/>
            </View>
                    <Formik
                        initialValues={{ email: '',Password:'' }}
                        validationSchema={loginSchema}
                        onSubmit={values => signUpMode?signUpHandler(values.email,values.Password):loginHandler(values.email,values.Password)}
                    >
                    
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder="Email" onChangeText={handleChange('email')} onBlur={handleBlur('email')}value={values.email}/>
                        </View>
                        {touched.email&&errors.email?<Text style={styles.error}>{touched.email&&errors.email}</Text>:null}
                        <View style={styles.inputContainer}>
                        <View style={styles.inputAndToggle}>
                        <TextInput style={styles.input} secureTextEntry={!showPassord} placeholder="Password" onChangeText={handleChange('Password')} onBlur={handleBlur('Password')} value={values.Password}/>
                        <View style={styles.toggle}><TouchableOpacity onPress={()=>setShowPassord(!showPassord)}><AntDesign name="eye" size={30} color={Colors.primary} /></TouchableOpacity></View>
                        </View>
                        </View>
                        {touched.Password&&errors.Password?<Text style={styles.error}>{touched.Password&&errors.Password}</Text>:null}

                        <View>
                        <SignInSignUpButton title={!signUpMode?'Sign In':'Sign Up'}press={handleSubmit}/>
                        <SignInSignUpButton title={signUpMode?'Sign In':'Sign Up'}press={()=>setSignUpMode(!signUpMode)}/>
                        </View>
                        
                    </View>
                    
                    )}
                    </Formik>
            <View>
                <LoginFooter/>
            </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView> 
    );   
    
}
export default AuthScreen;
const styles = StyleSheet.create({
    logoContainer:{
        backgroundColor:Colors.additional,
        borderBottomLeftRadius:90,
        borderTopRightRadius:90,
    },
    formContainer:{
        marginHorizontal:40,
        marginTop:30,
    },
    input:{
        borderWidth:2,
        borderColor:Colors.secondary,
        padding:10,
        borderRadius:20,
        color:Colors.primary,
        fontSize:17,
        width:"100%"
        
    },
    inputContainer:{
        borderWidth:1,
        borderColor:Colors.secondary,
        padding:2,
        borderRadius:20,
        marginTop:10,
    },
    inputAndToggle:{
        flexDirection:'row'
    },
    toggle:{
        /* position: absolute;
        top: 0px;
        left: 0px; */
        position:'absolute',
        top:"20%",
        left:"85%"
    },
    error:{
        color:'red',
        marginLeft:10,
        marginTop:5,
    }

});
