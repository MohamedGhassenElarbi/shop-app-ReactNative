import Order from "../../models/order";
import { ORDER } from "../actions/orders";

const initialState = {
    orders:[],
}
const ordersReducer =  (state=initialState,action)=> {
    switch(action.type){
        
        case ORDER:
            const neworder = new Order(new Date().toString(),action.orderData.items,action.orderData.amount,new Date());
            return{
                ...state,
                orders:state.orders.concat(neworder)
            };
    }
    return state;
}
export default ordersReducer;