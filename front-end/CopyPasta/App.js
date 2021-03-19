import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, SafeAreaView } from "react-native";
import ConnectedDevicesButton from "./app/ConnectedDevicesButton";
import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import ConnectedDevicesList from "./app/ConnectedDevicesList";
import LoginScreen from "./app/LoginScreen";
import StyleSheetFile from "./styles/StyleSheetFile.js"

export default function App() {
  return (
    <SafeAreaView style={StyleSheetFile.BaseStyles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}
