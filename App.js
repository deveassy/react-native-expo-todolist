// import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Items title="우선순위 정하기" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
});
