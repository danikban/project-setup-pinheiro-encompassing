import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ConnectedDevicesList = () => {
  const data = [
    {
      key: "1",
      title: "First Item",
    },
    {
      key: "0",
      title: "Second Item",
    },
    {
      key: "2",
      title: "Third Item",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem}></FlatList>
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
});

export default ConnectedDevicesList;
