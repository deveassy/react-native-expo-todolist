import React from "react";
import styled from "styled-components";
import { StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ show }) => {
  //   let Today = new Date();
  //   Today.toLocaleDateString();
  return (
    <Container>
      <HeaderText>Today's ToDoList</HeaderText>
      <AddButton activeOpacity={0.8} style={styles.button} onPress={show}>
        <Ionicons name="ios-add" color="#f3c623" size={24} />
      </AddButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0,
    }),
  },
});

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px 20px;
`;
const HeaderText = styled.Text`
  padding: 8px;
  font-size: 35px;
  font-weight: 700;
  color: #f3c623;
`;
const AddButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #f3c623;
  border-radius: 15px;
`;

export default Header;
