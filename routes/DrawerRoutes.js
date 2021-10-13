import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OrdersScreen from '../screens/OrdersScreen';
import UserProductsScreen from '../screens/UserProductsScreen';
import ProductOverviewScreen from "../screens/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import UserProductsStackRoutes from "./UserProductsStackRoutes";
const Drawer = createDrawerNavigator();
const DrawerRoutes = () => {
    return(
       
        <Drawer.Navigator screenOptions={{//shared options between all routes
            headerStyle: {
              backgroundColor: Colors.secondary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Drawer.Screen name="Products" component={ProductOverviewScreen} />
            <Drawer.Screen name="UserProducts" component={UserProductsStackRoutes}  />
            <Drawer.Screen name="Orders" component={OrdersScreen} />
        </Drawer.Navigator>
        
    );
}
export default DrawerRoutes;