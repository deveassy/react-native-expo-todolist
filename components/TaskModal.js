import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const TaskModal = ({ isVisible, hide, add }) => {
  let content = "";
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={hide}
      avoidKeyboard
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <TextInput
          onChangeText={(text) => {
            content = text;
          }}
          onEndEditing={() => add(content)}
          placeholder="What are you going to Do?"
          maxLength={20}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 5,
  },
  modalContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
export default TaskModal;
