import React, { useEffect, useState } from "react";
import { api, ApiError } from "../../api";
import { Post } from "../../types/Post";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Loading } from "../../components/loading";
import { Error } from "../../components/error";

export const Home = ({ navigation }: any) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState<ApiError>({
    message: "",
  });
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const posts = await api();
        setData(posts);
      } catch (error) {
        const err = error as ApiError;
        setErrorRequest(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = filterTitle.length
    ? data.filter((post) =>
        post.title.toLowerCase().includes(filterTitle.toLowerCase())
      )
    : data;

  const navigateToDetails = (post: Post) => {
    navigation.navigate("Details", { post });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fetch API Posts</Text>
      <TextInput
        style={styles.input}
        placeholder="Filter by title"
        value={filterTitle}
        onChangeText={setFilterTitle}
      />
      <Loading isLoading={isLoading} />
      <Error message={errorRequest.message} />
      <>
        <FlatList
          style={styles.containerList}
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.item}>
              <TouchableOpacity
                onPress={() => navigateToDetails(item)}
                style={styles.buttonItem}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    minHeight: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 5,
    marginBottom: 30,
  },

  containerList: {
    paddingHorizontal: 20,
  },

  item: { marginBottom: 10 },
  buttonItem: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
});
