import React from "react";
import styled from "styled-components";
import Modal from "react-native-modal";

export default function TaskModal({ isVisible, hide, add }) {
  let content = "";
  return (
    <ModalContainer isVisible={isVisible} onBackdropPress={hide} avoidKeyboard>
      <ModalStyle>
        <InputModal
          onChangeText={(text) => {
            content = text;
          }}
          onEndEditing={() => add(content)}
          placeholder="What are you going to Do?"
          maxLength={20}
        />
      </ModalStyle>
    </ModalContainer>
  );
}

const ModalContainer = styled(Modal)`
  justify-content: flex-end;
  margin: 5px;
`;
const InputModal = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 20px;
`;
const ModalStyle = styled.View`
  padding: 16px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
