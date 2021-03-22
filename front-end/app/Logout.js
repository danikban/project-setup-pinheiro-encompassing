import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: "#01003b", fontSize: 15, alignSelf: "center" }}>
        Logout
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default LogoutButton;
