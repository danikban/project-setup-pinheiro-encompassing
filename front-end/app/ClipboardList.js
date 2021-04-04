import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Clipboard,
  TextInput,
  SafeAreaView,
} from "react-native";

const Item = ({ date, content }) => {
  const writeToClipboard = async () => {
    await Clipboard.setString(content);
    alert("Copied to Clipboard!");
  };
  return (
    <TouchableOpacity style={styles.item} onPress={writeToClipboard}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.clipboardContent}>{content}</Text>
    </TouchableOpacity>
  );
};

const ClipboardList = () => {
  const url = "https://my.api.mockaroo.com/clipboardcontent.json?key=a7c3ef30";
  let [data, loadData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [TextBox, setText] = useState("");

  const renderItem = ({ item }) => (
    <Item date={item.date} content={item.content} />
  );
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        loadData(json);
        console.log(json);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput
        autoCorrect={false}
        style={styles.item}
        placeholder="An empty text box, for spontaneous CopyPastas"
        onChangeText={(TextBox) => setText(TextBox)}
        defaultValue={ClipboardList.TextBox}
        clearButtonMode="always"
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To CopyPasta</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.list}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    minWidth: "85%",
  },
  date: {
    fontSize: 12,
    color: "darkgray",
  },
  clipboardContent: {
    fontSize: 18,
  },
  list: { flex: 1 },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
  },
  buttonText: {
    color: "#01003b",
    fontSize: 16,
  },
});

export default ClipboardList;
