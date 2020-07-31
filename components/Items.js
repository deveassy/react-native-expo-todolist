import React from "react";
import styled from "styled-components";
// import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DeleteButton from "./DeleteButton";

export default function Items({ title, done, remove, toggle }) {
  return (
    <Swipeable renderRightActions={() => <DeleteButton onPress={remove} />}>
      <Container>
        <Item>
          <CheckButton
            activeOpacity={0.8}
            onPress={toggle}
            style={done ? check : uncheck}
          >
            <FontAwesome
              name="check"
              color={done ? "#000" : "#999"}
              size={14}
            />
          </CheckButton>
          <ItemText>{title}</ItemText>
        </Item>
      </Container>
    </Swipeable>
  );
}

// const styles = StyleSheet.create({
//   done: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: 28,
//     height: 28,
//     marginRight: 10,
//     backgroundColor: "#f3c623",
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: "transparent",
//   },
//   haveto: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: 28,
//     height: 28,
//     marginRight: 10,
//     borderWidth: 1,
//     borderColor: "#999",
//     borderRadius: 14,
//   },
// });

const Container = styled.View`
  padding: 0 25px;
`;
const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #777;
`;
const ItemText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const CheckButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border: ${(style) => {
    if (style.check) return "1px solid transparent";
    if (style.uncheck) return "1px soild #999";
  }};
  border-radius: 14px;
  background-color: ${(style) => {
    if (style.check) return "#f3c623";
  }};
`;
