import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ show }) => {
  //   let Today = new Date();
  //   Today.toLocaleDateString();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Today's ToDoList</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={show}
      >
        <Ionicons name="ios-add" color="#f3c623" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  headerText: {
    padding: 8,
    color: "#f3c623",
    fontSize: 35,
    fontWeight: "700",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f3c623",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
  },
});

export default Header;
