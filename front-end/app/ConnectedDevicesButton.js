import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const ConnectedDevicesButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress.logoutPress}>
      <Text style={styles.buttonText}>View Connected Devices</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#01003b",
  },
});

export default ConnectedDevicesButton;
