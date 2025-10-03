import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Details } from "../pages";

export type RootStackParamList = {
  Home: undefined;
  Details: { post: { id: number; title: string; body: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}
