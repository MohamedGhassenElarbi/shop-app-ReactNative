export const ORDER ="ORDER";
export const placeOrder = (cartItems,totalAmount)=>{
    
    return{type:ORDER,orderData:{items:cartItems,amount:totalAmount}};
};