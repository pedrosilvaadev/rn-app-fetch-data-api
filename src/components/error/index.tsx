import { Text, View } from "react-native";

export const Error = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red", fontSize: 18 }}>Error: {message}</Text>
    </View>
  );
};
