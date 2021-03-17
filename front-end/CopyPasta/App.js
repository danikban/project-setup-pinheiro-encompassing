import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import ConnectedDevicesButton from "./app/ConnectedDevicesButton";
import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import ConnectedDevicesList from "./app/ConnectedDevicesList";
import LoginScreen from "./app/LoginScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
});
