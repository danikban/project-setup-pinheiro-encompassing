import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import db from "./firebase.config.js";
import {id} from "./LoginScreen.js";
import firebase from "firebase";
import {userID} from "./LoginScreen.js";
import {
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Clipboard,
  SafeAreaView,
  RefreshControl,
} from "react-native";

var text = firebase.database().ref("/users/"+userID).update({clipboard: copyText});


const Item = ({ date, content }) => {
  const writeToClipboard = async () => {
    await Clipboard.setString(content);
    alert("Copied to Clipboard!");
  };
  return (
    <TouchableOpacity style={styles.item} onPress={writeToClipboard}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.clipboardContent}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#01003b",
  },
});
export default CopyPastedCode;
