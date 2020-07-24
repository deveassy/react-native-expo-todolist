import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DeleteButton() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.delete}>삭제</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    margin: 1,
    backgroundColor: "#FE5746",
  },
  delete: {
    margin: 10,
    color: "#fff",
  },
});
