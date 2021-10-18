import axios from "axios";
export const SIGN_UP ='SIGN_UP';
export const LOGIN='LOGIN';
export const signUp = (email,password) => {
    return dispatch =>{
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkXsUvese0W0VhGWBtJq09QMNcedktz0k',
        {email:email,password:password,returnSecureToken:true},{headers: {
            "Content-Type": "application/json"}
        }).then(response=>
            {
            console.log(response)
            dispatch({type:SIGN_UP});
        }).catch(err=>console.log(err))
    };
}
export const login = (email,password) => {
    return dispatch =>{
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkXsUvese0W0VhGWBtJq09QMNcedktz0k',
        {email:email,password:password,returnSecureToken:true},{headers: {
            "Content-Type": "application/json"}
        }).then(response=>
            {
            console.log(response)
            dispatch({type:LOGIN});
        }).catch(err=>console.log(err))
    };
}