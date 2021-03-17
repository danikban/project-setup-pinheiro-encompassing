import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ConnectedDevicesList = ({ buttonPress }) => {
  const data = [
    {
      key: "0",
      title: "First Item",
    },
    {
      key: "1",
      title: "Second Item",
    },
    {
      key: "2",
      title: "Third Item",
    },
    {
      key: "3",
      title: "Fourth Item",
    },
    {
      key: "4",
      title: "Fifth Item",
    },
    {
      key: "5",
      title: "Sixth Item",
    },
    {
      key: "6",
      title: "Seventh Item",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem}></FlatList>
      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderItem = ({ item }) => <Item title={item.title} />;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    width: 300,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    width: 280,
  },
  title: {
    fontSize: 12,
  },
  button: {
    backgroundColor: "#01003b",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ConnectedDevicesList;
