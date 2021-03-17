import React, { useState } from "react";
import { View } from "react-native";
import ConnectedDevicesButton from "./ConnectedDevicesButton";
import ConnectedDevicesList from "./ConnectedDevicesList";

const ConnectedDevicesContainer = () => {
  const [showList, setShowList] = useState(false);

  return showList ? (
    <ConnectedDevicesList buttonPress={() => setShowList(false)} />
  ) : (
    <ConnectedDevicesButton onPress={() => setShowList(true)} />
  );
};

export default ConnectedDevicesContainer;
