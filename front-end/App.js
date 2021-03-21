import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

import ConnectedDevicesButton from "./app/ConnectedDevicesButton";
import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import ConnectedDevicesList from "./app/ConnectedDevicesList";
import LoginScreen from "./app/LoginScreen";
import ClipboardContainer from "./ClipboardContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01003b",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
});
