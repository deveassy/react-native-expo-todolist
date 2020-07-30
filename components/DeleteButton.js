import React from "react";
import styled from "styled-components";

export default function DeleteButton({ onPress }) {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <DeleteText>삭제</DeleteText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 1px;
  background-color: #fe5746;
`;

const DeleteText = styled.Text`
  margin: 10px;
  color: #fff;
`;
