import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ConnectedDevicesList = ({ buttonPress }) => {
  let [devices, loadDevices] = React.useState([]);
  const url = "https://my.api.mockaroo.com/devicename.json?key=06f36ef0";
  let mounted = false;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        loadDevices(json);
        console.log(json);
      });
  }, []);
  console.log(devices);
  return (
    <View style={styles.container}>
      <FlatList data={devices} renderItem={renderItem}></FlatList>
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
