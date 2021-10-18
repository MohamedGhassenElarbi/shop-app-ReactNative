import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from '../screens/CartScreen';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Colors from '../constants/Colors';
import DrawerRoutes from "./DrawerRoutes";
import AuthScreen from "../screens/AuthScreen";
const Stack =createNativeStackNavigator();
const StackRoutes = () => {
    return(
        <Stack.Navigator screenOptions={{//shared options between all routes
            headerStyle: {
              backgroundColor: Colors.secondary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            {/* <Stack.Screen name="Products Overview" component={DrawerRoutes} options={{headerShown: false}}  />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}
                options={({ route }) => ({ title: route.params.item.title })}
            />
            <Stack.Screen name="Cart" component={CartScreen} /> */}
            <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}
export default StackRoutes;