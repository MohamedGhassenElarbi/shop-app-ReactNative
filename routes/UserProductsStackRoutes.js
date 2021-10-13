import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProductsScreen from "../screens/UserProductsScreen";
import EditProductScreen from '../screens/EditProductScreen'
import Colors from "../constants/Colors";
const Stack = createNativeStackNavigator();
const UserProductsStackRoutes = () => {
    return(
        <Stack.Navigator initialRouteName="userProducts"
        screenOptions={{//shared options between all routes
            headerStyle: {
              backgroundColor: Colors.secondary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="userProducts" component={UserProductsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="EditProduct" component={EditProductScreen} />
        </Stack.Navigator>
    );
}
export default UserProductsStackRoutes;