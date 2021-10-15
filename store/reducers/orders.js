import Order from "../../models/order";
import { ORDER, SET_ORDERS } from "../actions/orders";

const initialState = {
    orders:[],
}
const ordersReducer =  (state=initialState,action)=> {
    switch(action.type){
        
        case ORDER:
            const neworder = new Order(action.orderData.id,action.orderData.items,action.orderData.amount,action.orderData.date);
            return{
                ...state,
                orders:state.orders.concat(neworder)
            };
        case SET_ORDERS:
            return{
                orders:action.orders
            };
    }
    return state;
}
export default ordersReducer;