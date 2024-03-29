import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { combineReducers, createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './routes/StackRoutes';
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({
  products:productsReducer,
  cart:cartReducer,
  orders:ordersReducer,
})
const store =createStore(rootReducer,applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackRoutes></StackRoutes>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
