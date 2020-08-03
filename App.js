import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components";

import Header from "./components/Header";
import Items from "./components/Items";
import TaskModal from "./components/TaskModal";

export default function App() {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: "일기쓰기",
        done: true,
      },
      {
        id: 2,
        title: "블로그 포스팅하기",
        done: true,
      },
      {
        id: 3,
        title: "React-Native 작업하기",
        done: false,
      },
    ],
    showModal: false,
  });
  return (
    <Container>
      <Header
        show={() => {
          setState({
            showModal: true,
          });
        }}
      />
      <FlatList
        data={state.todos}
        renderItem={({ item, index }) => {
          return (
            <Items
              title={item.title}
              done={item.done}
              remove={() => {
                setState({
                  todos: state.todos.filter((_, i) => i !== index),
                });
              }}
              toggle={() => {
                const newTodos = [...state.todos];
                newTodos[index].done = !newTodos[index].done;
                setState({ todos: newTodos });
              }}
            />
          );
        }}
      />
      <TaskModal
        isVisible={state.showModal}
        add={(title) => {
          setState({
            // ...state,
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
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222;
`;
// const App = () => {
//   const [state, setState] = useState([]);

//   const addTodo = (text) => {
//     setState([
//       ...state,
//       { id: Math.random().toString(), todo: text, done: false },
//     ]);
//   };

//   const onRemove = (id) => (e) => {
//     setState(state.filter((todo) => todo.id !== id));
//   };

//   const onToggle = (id) => (e) => {
//     setState(state.map((todo) =>
//     todo.id === id ? {...todo, done: !todo.done} : todo));
//   };
// };

// export default App;
