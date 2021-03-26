import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const LoginScreen = (onPress) => {
  const [code, setText] = useState("");
  return (
    <SafeAreaView style={styles.containerLogin}>
      <View style={{ flex: 0.1 }} />
      <Text style={styles.containerHeader}>CopyPasta</Text>
      <Text style={styles.containerSubHeader}>sharing. made easy.</Text>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.textInput}
          placeholder="CopyPasta code here!"
          onChangeText={(code) => setText(code)}
          defaultValue={LoginScreen.code}
        />
      </KeyboardAvoidingView>
      <View style={{ flex: 0.2 }} />
      <TouchableOpacity style={styles.button} onPress={onPress.onPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{ flex: 0.1 }} />
      <TouchableOpacity style={styles.button} onPress={onPress.onPress}>
        <Text style={styles.buttonText}>Google Sign In</Text>
      </TouchableOpacity>
      <View style={{ flex: 0.15 }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    backgroundColor: "#01003b",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHeader: {
    flex: 0.15,
    fontSize: 48,
    color: "#fff",
  },
  containerSubHeader: {
    flex: 0.25,
    fontSize: 22,
    color: "#fff",
  },
  textInput: {
    textAlign: "center",
    alignSelf: "center",
    width: 300,
    maxHeight: 100,
    backgroundColor: "#fff",
    color: "#01003b",
    fontSize: 24,
    flex: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#01003b",
    fontSize: 24,
  },
});

export default LoginScreen;
