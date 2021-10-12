import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './routes/StackRoutes';
const rootReducer = combineReducers({
  products:productsReducer,
  cart:cartReducer,
})
const store =createStore(rootReducer)
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
