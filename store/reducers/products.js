import PRODUCTS from '../../data/dummy-data'; 
import Product from '../../models/Product';
import { CREATE_PRODUCT, DELETE_PRODUCT, updateProduct, UPDATE_PRODUCT } from '../actions/products';
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
        case CREATE_PRODUCT:
            const newproduct = new Product (
                new Date().toString(),
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price,
            )
            return{
                ...state,
                availableproducts:state.availableproducts.concat(newproduct),
                userProducts:state.userProducts.concat(newproduct),
            };
        case UPDATE_PRODUCT:
            const productIndex = state.userProducts.findIndex(prod=>prod.id===action.id);
            const updatedProduct =new Product(
                action.id,
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userProducts[productIndex].price,
            )
            const updatedUserproducts = [...state.userProducts];
            updatedUserproducts[productIndex]=updatedProduct;
            const availableProductIndex= state.availableproducts.findIndex(prod=>prod.id===action.id);
            const updatedAvailableProducts = [...state.availableproducts];
            updatedAvailableProducts[availableProductIndex]=updatedProduct;
            return{
                ...state,
                availableproducts:updatedAvailableProducts,
                userProducts:updatedUserproducts,
            };
    }
    return state;
}
export default productsReducer;