import axios from "../../axiosInstance";
import Order from "../../models/order";

export const ORDER ="ORDER";
export const SET_ORDERS ="SET_ORDERS";
export const placeOrder = (cartItems,totalAmount)=>{
    
    return dispatch =>{
        const date = new Date();
        axios.post('orders/u1.json',{cartItems:cartItems,totalAmount:totalAmount,date:date.toISOString()})
        .then(response=>{ dispatch({type:ORDER,orderData:{id:response.data.name,items:cartItems,amount:totalAmount,date:date.toISOString()}})
        console.log(response);}).catch(err=>console.log(err))
        
    };
    
    
};
export const fetchOrders=()=>{
    return async dispatch =>{
        const response = await axios.get('orders/u1.json')

        
            const loadedOrders=[];
            for (const key in response.data){
                loadedOrders.push(new Order(
                    key,
                    response.data[key].cartItems,
                    response.data[key].totalAmount,
                    /*new Date(*/response.data[key].date/*)*/,
                ))
            }
            dispatch({type:SET_ORDERS,orders:loadedOrders})
        
        
    };
};