import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Today's ToDoList</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 40,
  },
  headerText: {
    color: "#f3c623",
    fontSize: 35,
    fontWeight: "600",
  },
});
