import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import ConnectedDevicesButton from "./app/ConnectedDevicesButton";
import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import ConnectedDevicesList from "./app/ConnectedDevicesList";

export default function App() {
  const handlePress = () => console.log({code})
  const [code, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ConnectedDevicesContainer />
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
