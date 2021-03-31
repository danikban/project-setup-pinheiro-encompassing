import React from "react";
import { SafeAreaView } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import ClipboardList from "./ClipboardList";
import ConnectedDevicesContainer from "./ConnectedDevicesContainer";
import LogoutButton from "./Logout";

const user = "Rahat Hossan";
const UID = "42-314159";

const ClipboardContainer = (onPress) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.containerHeaderText}>CopyPasta</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.containerSubHeaderText}>sharing. made easy.</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.userInfo}>
          <View >
            <Text style={styles.containerDetailText}>
              Welcome, {user}!
            </Text>
          </View>
          <View>
          <Text style={styles.containerDetailText}>
              UID: #{UID}
            </Text>
          </View>
        </View>
        <ClipboardList />
        
      </View>
      <ConnectedDevicesContainer />
      <LogoutButton onPress={onPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  header: {
    flex: 0.18,
    marginBottom: 10,
  },
  headerText: {
    backgroundColor: "#01003b",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerHeaderText: {
    fontSize: 48,
    color: "#fff",
  },
  containerSubHeaderText: {
    fontSize: 22,
    color: "#fff",
  },
  containerDetailText: {
    fontSize: 10,
    color: "lightgray",
  },
  userInfo: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default ClipboardContainer;
