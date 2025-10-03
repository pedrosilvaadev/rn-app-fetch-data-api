import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../routes";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export const Details = ({ route }: DetailsProps) => {
  const { post } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.separator}></View>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    borderRadius: 5,
  },
  body: { fontSize: 16, marginTop: 10, fontWeight: "semibold" },
  separator: {
    height: 2,
    width: "80%",
    marginVertical: 4,
    backgroundColor: "#ccc",
  },
});
