import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Loading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
  },
});
