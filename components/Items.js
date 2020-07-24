import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DeleteButton from "./DeleteButton";

const Items = ({ title, done }) => {
  return (
    <Swipeable renderRightActions={() => <DeleteButton />}>
      <View style={styles.container}>
        <View style={styles.items}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={done ? styles.done : styles.haveto}
          >
            <FontAwesome
              name="check"
              color={done ? "#000" : "#999"}
              size={14}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#777",
  },
  title: {
    fontSize: 16,
    color: "#fff",
  },
  done: {
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    marginRight: 10,
    backgroundColor: "#f3c623",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "transparent",
  },
  haveto: {
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 14,
  },
});

export default Items;

// function onPressButton() {
//   {
//     style ? styles.done : styles.haveto;
//   }
// }
