import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import CartItem from '../../models/cart-item';
const initialState={
    items:{},
    totalAmount:0
};
const cartReducer = (state=initialState,action) => {
    
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct=action.product;
            const productPrice=addedProduct.price;
            const productTitle=addedProduct.title;
            if(state.items[addedProduct.id]){
                const updatedCartItem = new CartItem(
                    
                    state.items[addedProduct.id].quantity+1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum+productPrice
                );
                return{
                    ...state,
                    items:{...state.items,[addedProduct.id]:updatedCartItem},
                    totalAmount:state.totalAmount+productPrice
                };
            }else{
                const newCartItem= new CartItem(1,productPrice,productTitle,productPrice)
                return{
                    ...state,
                    items:{...state.items,[addedProduct.id]:newCartItem},
                    totalAmount:state.totalAmount+productPrice
                };
            }
        case REMOVE_FROM_CART:
            const deletedSum =(state.items[action.id].productPrice )
            if(state.items[action.id].quantity>1){
                const updateItem = new CartItem(
                    state.items[action.id].quantity-1,
                    state.items[action.id].productPrice,
                    state.items[action.id].productTitle,
                    state.items[action.id].sum-deletedSum
                )
                
                return{
                    ...state,
                    items:{...state.items,[action.id]:updateItem},
                    totalAmount:state.totalAmount-deletedSum
                };
                
            }else{
                const updatedItems ={...state.items};
                delete updatedItems[action.id];
                console.log(updatedItems);
                return{
                    ...state,
                    items:{updatedItems},
                    totalAmount:state.totalAmount-deletedSum
                };
            }
    }
    return state;
}
export default cartReducer;