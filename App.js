import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import Header from "./components/Header";
import Items from "./components/Items";
import TaskModal from "./components/TaskModal";

export default function App() {
  const [state, setState] = useState({
    todos: [
      {
        title: "일기쓰기",
        done: true,
      },
      {
        title: "블로그 포스팅하기",
        done: true,
      },
      {
        title: "React-Native 작업하기",
        done: false,
      },
    ],
    showModal: false,
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header
        show={() => {
          setState({ showModal: true });
        }}
      />
      <FlatList
        data={state.todos}
        renderItem={({ item }) => {
          return (
            <Items
              title={item.title}
              done={item.done}
              keyExtractor={(_, index) => {
                return "${index}";
              }}
            />
          );
        }}
      />
      <TaskModal
        isVisible={state.showModal}
        add={(title) => {
          setState({
            todos: state.todos.concat({
              title: title,
              done: false,
            }),
            showModal: false,
          });
        }}
        hide={() => {
          setState({ showModal: false });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
});
