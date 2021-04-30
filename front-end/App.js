import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./app/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

import { firebaseConfig } from "./config";
//firebase.initializeApp(firebaseConfig);

//export default function App() {
//   let [visible, setVisible] = useState(true);
//   return visible ? (
//     <SafeAreaView style={styles.container}>
//       <ClipboardContainer onPress={() => setVisible(false)} />
//     </SafeAreaView>
//   ) : (
//     <SafeAreaView style={styles.container}>
//       <LoginScreen onPress={() => setVisible(true)} />
//     </SafeAreaView>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
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

export const Devices = [];

const currentDevice = Constants.deviceName;

while (!Devices.includes(currentDevice)) {
  Devices.push(currentDevice);
}

console.log("Data Devices", Devices);
