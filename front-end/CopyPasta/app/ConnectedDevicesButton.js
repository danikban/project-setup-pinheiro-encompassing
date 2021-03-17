import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ConnectedDevicesButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>View Connected Devices</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#01003b",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ConnectedDevicesButton;
