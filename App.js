// import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import { StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Items title="우선순위 정하기" done={false} />
      <Items title="투두리스트 만들기" done={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
});
