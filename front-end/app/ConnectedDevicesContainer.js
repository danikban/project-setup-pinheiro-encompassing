import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import ConnectedDevicesButton from "./ConnectedDevicesButton";
import ConnectedDevicesList from "./ConnectedDevicesList";

const ConnectedDevicesContainer = () => {
  const [showList, setShowList] = useState(false);

  return showList ? (
    <View style={styles.bottom}>
      <ConnectedDevicesList
        buttonPress={() => {
          setShowList(false);
        }}
      />
      <ConnectedDevicesButton onPress={() => setShowList(true)} />
    </View>
  ) : (
    <View style={styles.bottom}>
      <ConnectedDevicesButton onPress={() => setShowList(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 36,
  },
});

export default ConnectedDevicesContainer;
