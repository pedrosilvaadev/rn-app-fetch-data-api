import { RootStack } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
