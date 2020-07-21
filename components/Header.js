import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Today's ToDoList</Text>
      </View>
      <View style={styles.content}>
        {/* <Text style={styles.text} onPress={onPressButton}>
          Button
        </Text> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 5,
    paddingLeft: 5,
    backgroundColor: "#f3c623",
  },
  headerText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },
  content: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },
  //   text: {
  //     padding: 5,
  //     color: "#fff",
  //     borderWidth: 1,
  //     borderColor: "#fff",
  //   },
});

// function onPressButton() {
//   alert("클릭되었어요!");
// }
