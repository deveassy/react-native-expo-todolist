import React from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DeleteButton from "./DeleteButton";

export default function Items({ title, done, remove, toggle }) {
  return (
    <Swipeable renderRightActions={() => <DeleteButton onPress={remove} />}>
      <Container>
        <Item>
          <CheckButton activeOpacity={0.8} onPress={toggle}>
            {done ? (
              <Done>
                <FontAwesome name="check" color="#000" size={14} />
              </Done>
            ) : (
              <HaveTo />
            )}
          </CheckButton>
          <ItemText>{title}</ItemText>
        </Item>
      </Container>
    </Swipeable>
  );
}

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
  border-radius: 14px;
`;
const Done = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border: 1px solid transparent;
  border-radius: 14px;
  background-color: #f3c623;
`;
const HaveTo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border: 2px solid #999;
  border-radius: 14px;
`;
