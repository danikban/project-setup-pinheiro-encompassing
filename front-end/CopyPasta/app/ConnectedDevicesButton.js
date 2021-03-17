import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const

const ConnectedDevicesButton = () => {
  return (
    <TouchableOpacity style={styles.loginScreenButton}>
      <Text style={styles.buttonText}>View Connected Devices</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    backgroundColor: "#01003b",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ConnectedDevicesButton;
