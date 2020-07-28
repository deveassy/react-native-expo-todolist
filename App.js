import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ToolbarAndroidBase,
} from "react-native";

import Header from "./components/Header";
import Items from "./components/Items";
import TaskModal from "./components/TaskModal";

// export default function App() {
//   const [state, setState] = useState({
//     todos: [
//       {
//         id: 1,
//         title: "일기쓰기",
//         done: true,
//       },
//       {
//         id: 2,
//         title: "블로그 포스팅하기",
//         done: true,
//       },
//       {
//         id: 3,
//         title: "React-Native 작업하기",
//         done: false,
//       },
//     ],
//     showModal: false,
//   });
//   return (
//     <SafeAreaView style={styles.container}>
//       <Header
//         show={() => {
//           setState({ showModal: true });
//         }}
//       />
//       <FlatList
//         data={state.todos}
//         renderItem={({ item }) => {
//           return (
//             <Items
//               title={item.title}
//               done={item.done}
//               keyExtractor={(_, index) => todos.index}
//             />
//           );
//         }}
//       />
//       <TaskModal
//         isVisible={state.showModal}
//         add={(title) => {
//           setState({
//             todos: state.todos.concat({
//               title: title,
//               done: false,
//             }),
//             showModal: false,
//           });
//         }}
//         hide={() => {
//           setState({ showModal: false });
//         }}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#222",
//   },
// });

const App = () => {
  const [state, setState] = useState([]);

  const addTodo = (text) => {
    setState([
      ...state,
      { id: Math.random().toString(), todo: text, done: false },
    ]);
  };

  const onRemove = (id) => (e) => {
    setState(state.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => (e) => {
    setState(state.map((todo) => todo));
  };
};
