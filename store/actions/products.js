export const DELETE_PRODUCT ="DELETE_PRODUCT";
export const CREATE_PRODUCT ="CREATE_PRODUCT";
export const UPDATE_PRODUCT ="UPDATE_PRODUCT";
export const SET_PRODUCTS ="SET_PRODUCTS";

import axios from '../../axiosInstance';
import Product from '../../models/Product';
export const deleteProduct=(id)=>{
    return dispatch => {
        axios.delete(`products/${id}.json`).then(
            response => dispatch({type:DELETE_PRODUCT,id:id})
        )
         
    };
    
};
export const createProduct=(title,description,imageUrl,price)=>{
    return dispatch =>{
        axios.post('products.json',{title:title,description:description,imageUrl:imageUrl,price:price})
        .then(response => {
            dispatch({type:CREATE_PRODUCT,productData:{
                id:response.data.name,
                title,
                description,
                imageUrl,
                price,
            }})
        })
        .catch(error => {
            console.log(error)
        })

       
    };
    
};
export const updateProduct=(id,title,description,imageUrl)=>{

    return dispatch => {//the difference between patch and put is that put recreates the element but patch just modifies what should be modified
        axios.patch(`products/${id}.json`,{title:title,description:description,imageUrl:imageUrl})
        .then(
            response => dispatch({type:UPDATE_PRODUCT,id:id,productData:{
                title,
                description,
                imageUrl,
            }})
        )
         
    };
};

export const fetchProducts=()=>{
    return async dispatch =>{
        const response = await axios.get('products.json')

        
            const loadedProducts=[];
            for (const key in response.data){
                loadedProducts.push(new Product(
                    key,
                    'u1',
                    response.data[key].title,
                    response.data[key].imageUrl,
                    response.data[key].description,
                    response.data[key].price,
                ))
            }
            dispatch({type:SET_PRODUCTS,products:loadedProducts})
        
        
    };
};