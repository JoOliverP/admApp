import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { AddProduct } from "../screens/AddProduct";
import { UpdateProduct } from "../screens/UpdateProduct";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
      <Screen name="addProduct" component={AddProduct} />
      <Screen name="updateProduct" component={UpdateProduct} />
    </Navigator>
  );
}
