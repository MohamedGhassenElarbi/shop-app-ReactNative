import PRODUCTS from '../../data/dummy-data'; 
import { DELETE_PRODUCT } from '../actions/products';
const initialState ={
    availableproducts:PRODUCTS,
    userProducts:PRODUCTS.filter(prod=>prod.ownerId=== 'u1')
};
const productsReducer =  (state=initialState,action)=> {
    switch(action.type){
        case DELETE_PRODUCT:
            return{
                ...state,
                userProducts:state.userProducts.filter((token)=>{return(token.id !== action.id)}),
                availableproducts:state.availableproducts.filter((token)=>{return(token.id!==action.id)}),
            };
    }
    return state;
}
export default productsReducer;